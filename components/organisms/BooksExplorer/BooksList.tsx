import BookCard from "@molecules/BookCard";
import GridList from "@molecules/GridList";
import useAuthContext from "context/AuthContext";
import useBooksExplorerContext from "context/BooksExplorerContext";

const BooksList = () => {
  const { isLoggedIn } = useAuthContext();
  const {
    books,
    getOnReadBookDetails,
    getOnAddBookToCart,
    bookBeingAddedToCart,
  } = useBooksExplorerContext();

  return (
    <GridList>
      {books.map((book) => {
        const { title, coverSrc, id, availableQuantity } = book;
        return (
          <BookCard
            key={id}
            title={title}
            coverUrl={coverSrc}
            availableQuantity={availableQuantity}
            onReadSynopsis={getOnReadBookDetails(book)}
            onAddToCart={getOnAddBookToCart(book)}
            isAddingToCart={bookBeingAddedToCart?.id === book.id}
            addToCartIsDisabled={!isLoggedIn}
            addToCartLabel={isLoggedIn ? "Add to cart" : "Login to add to cart"}
          />
        );
      })}
    </GridList>
  );
};

export default BooksList;
