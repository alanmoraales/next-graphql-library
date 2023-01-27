import { ReactNode, useState } from "react";
import { Book, useAllBooksQuery } from "services/graphql";
import BooksExplorerContext, {
  IBooksExplorerContext,
} from "./BooksExplorerContext";

interface IBooksExplorerProviderProps {
  children: ReactNode;
}

const BooksExplorerProvider = ({ children }: IBooksExplorerProviderProps) => {
  const { data, loading, error } = useAllBooksQuery();
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [bookBeingAddedToCart, setBookBeingAddedToCart] = useState<
    Book | undefined
  >();

  const onClearSelectedBook = () => setSelectedBook(undefined);

  const getOnReadBookDetails = (book: Book) => () => {
    setSelectedBook(book);
  };

  const getOnAddBookToCart = (book: Book) => () => {
    setBookBeingAddedToCart(book);
    // TODO: implement add to cart mutation
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
