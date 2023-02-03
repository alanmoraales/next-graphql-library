import { ReactNode, useState } from "react";
import {
  Book,
  useAddBookToCartMutation,
  useAllBooksQuery,
} from "services/graphql";
import BooksExplorerContext, {
  IBooksExplorerContext,
} from "./BooksExplorerContext";
import useNotification from "hooks/useNotification";

interface IBooksExplorerProviderProps {
  children: ReactNode;
}

const BooksExplorerProvider = ({ children }: IBooksExplorerProviderProps) => {
  const notify = useNotification();
  const [addBookToCartMutation] = useAddBookToCartMutation();
  const { data, loading, error } = useAllBooksQuery();
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [bookBeingAddedToCart, setBookBeingAddedToCart] = useState<
    Book | undefined
  >();

  const onClearSelectedBook = () => setSelectedBook(undefined);

  const getOnReadBookDetails = (book: Book) => () => {
    setSelectedBook(book);
  };

  const getOnAddBookToCart = (book: Book) => async () => {
    try {
      setBookBeingAddedToCart(book);
      await addBookToCartMutation({
        variables: {
          bookId: book.id,
          quantity: 1,
        },
        refetchQueries: ["AllBooks"],
      });
      notify.success({ description: "Book added to cart" });
    } catch (error: any) {
      notify.error({
        description: error?.message || "Could not add book to cart",
      });
    } finally {
      setBookBeingAddedToCart(undefined);
    }
  };

  const contextValue: IBooksExplorerContext = {
    books: data?.allBooks || [],
    isLoadingBooks: loading,
    hasErrorLoadingBooks: Boolean(error),
    selectedBook,
    onClearSelectedBook,
    getOnReadBookDetails,
    getOnAddBookToCart,
    bookBeingAddedToCart,
  };

  return (
    <BooksExplorerContext.Provider value={contextValue}>
      {children}
    </BooksExplorerContext.Provider>
  );
};

export default BooksExplorerProvider;
