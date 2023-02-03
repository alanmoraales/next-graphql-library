import { createContext } from "react";
import { Book } from "services/graphql";

interface IBooksExplorerContext {
  books: Book[];
  isLoadingBooks: boolean;
  hasErrorLoadingBooks: boolean;
  selectedBook?: Book;
  onClearSelectedBook: () => void;
  getOnReadBookDetails: (book: Book) => () => void;
  getOnAddBookToCart: (book: Book) => () => void;
  bookBeingAddedToCart?: Book;
}

const BooksExplorerContext = createContext<IBooksExplorerContext | undefined>(
  undefined
);

export type { IBooksExplorerContext };
export default BooksExplorerContext;
