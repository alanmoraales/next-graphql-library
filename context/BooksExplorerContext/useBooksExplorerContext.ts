import { useContext } from "react";
import BooksExplorerContext from "./BooksExplorerContext";

const useBooksExplorerContext = () => {
  const context = useContext(BooksExplorerContext);
  if (!context) {
    throw new Error(
      "useBooksExplorerContext must be used within a BooksExplorerContext"
    );
  }
  return context;
};

export default useBooksExplorerContext;
