"use client";

import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Flex, useDisclosure } from "@chakra-ui/react";
import ContentContainer from "@atoms/ContentContainer";
import BookCard from "@molecules/BookCard";
import GridList from "@organisms/GridList";
import AppBar from "@organisms/AppBar";
import BookDetailsDrawer from "@organisms/BookDetailsDrawer";

type Book = {
  title: string;
  description: string;
  id: number;
  imageUrl: string;
  availableQuantity: number;
};

const useAllBooks = (): Book[] => {
  const query = gql`
    {
      allBooks {
        title
        description
        id
        imageUrl
        availableQuantity
      }
    }
  `;
  const queryResponse = useQuery(query);
  return (queryResponse.data?.allBooks || []) as Book[];
};

const Home = () => {
  const books = useAllBooks();
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
          {books.map((book) => {
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
