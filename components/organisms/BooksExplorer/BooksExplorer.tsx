import ContentContainer from "@atoms/ContentContainer";
import BookDetailsDrawer from "./BookDetailsDrawer";
import BooksList from "./BooksList";
import { BooksExplorerProvider } from "context/BooksExplorerContext";

const BooksExplorer = () => {
  return (
    <ContentContainer paddingY={8} gap={8}>
      <BooksExplorerProvider>
        <BooksList />
        <BookDetailsDrawer />
      </BooksExplorerProvider>
    </ContentContainer>
  );
};

export default BooksExplorer;
