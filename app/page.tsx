"use client";

import { useEffect, useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import ContentContainer from "@atoms/ContentContainer";
import BookCard from "@molecules/BookCard";
import GridList from "@organisms/GridList";
import AppBar from "@organisms/AppBar";
import BookDetailsDrawer from "@organisms/BookDetailsDrawer";
import { Book, useAllBooksQuery } from "services/graphql";

const Home = () => {
  const { data } = useAllBooksQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    if (selectedBook) {
      onOpen();
    }
  }, [selectedBook, onOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedBook(null);
    }
  }, [isOpen]);

  const onReadSynopsis = (book: Book) => () => {
    setSelectedBook(book);
  };

  return (
    <Flex direction="column" gap={4}>
      <AppBar />
      <ContentContainer paddingY={8} gap={8}>
        <GridList>
          {data?.allBooks.map((book) => {
            const { title, imageUrl, id, availableQuantity } = book;
            return (
              <BookCard
                key={id}
                title={title}
                coverUrl={imageUrl}
                availableQuantity={availableQuantity}
                onReadSynopsis={onReadSynopsis(book)}
                onAddToCart={() => {}}
                isAddingToCart={false}
              />
            );
          })}
        </GridList>
        <BookDetailsDrawer
          isOpen={Boolean(isOpen && selectedBook)}
          onClose={onClose}
          onAddToCart={() => {}}
          isAddingToCart={false}
          bookTitle={selectedBook?.title || ""}
          bookDescription={selectedBook?.description || ""}
          bookImageUrl={selectedBook?.imageUrl || ""}
        />
      </ContentContainer>
    </Flex>
  );
};

export default Home;
