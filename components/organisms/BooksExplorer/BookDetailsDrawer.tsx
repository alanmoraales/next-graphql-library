"use client";

import { CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  IconButton,
  Button,
  DrawerFooter,
  Text,
} from "@chakra-ui/react";
import BookCoverImage from "@atoms/BookCoverImage";
import useBooksExplorerContext from "context/BooksExplorerContext";
import useAuthContext from "context/AuthContext";

const BookDetailsDrawers = () => {
  const { isLoggedIn } = useAuthContext();
  const {
    selectedBook,
    onClearSelectedBook,
    getOnAddBookToCart,
    bookBeingAddedToCart,
  } = useBooksExplorerContext();
  const { title, synopsis, coverSrc } = selectedBook || {};

  return (
    <Drawer
      isOpen={Boolean(selectedBook)}
      onClose={onClearSelectedBook}
      placement="bottom"
      size="md"
    >
      <DrawerOverlay background="rgb(161 161 161 / 30%)" />
      <DrawerContent
        height={{ base: "100dvh", md: "60svh" }}
        background="rgba(255, 255, 255, 0.85)"
        backdropFilter="blur(20px)"
        borderTopWidth="1px"
      >
        <DrawerHeader>
          <Flex
            gap={4}
            justifyContent="space-between"
            width={{ base: "100%", sm: "80%", lg: "60%", xl: "40%" }}
            margin="0 auto"
            paddingTop={2}
            alignItems="baseline"
          >
            <Heading size="md">{title}</Heading>
            <IconButton
              icon={<CloseIcon />}
              onClick={onClearSelectedBook}
              aria-label="Close book details drawer"
              variant="ghost"
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Grid
            gridTemplateColumns={{ base: "1fr", md: "30% 1fr" }}
            gap={8}
            width={{ base: "100%", sm: "80%", lg: "60%", xl: "40%" }}
            margin="0 auto"
          >
            <BookCoverImage
              src={coverSrc || ""}
              alt={title || ""}
              height="250px"
            />
            <Flex direction="column" gap={2}>
              <Heading size="sm">Synopsis</Heading>
              <Text fontSize="xl" as="cite">
                {synopsis}
              </Text>
            </Flex>
          </Grid>
        </DrawerBody>
        <DrawerFooter>
          <Flex
            width={{ base: "full", sm: "80%", lg: "60%", xl: "40%" }}
            margin="0 auto"
          >
            <Button
              variant="solid"
              colorScheme="purple"
              width={{ base: "full", lg: "30%" }}
              // The drawer only opens is there is a selected book, so we can safely assume that
              onClick={getOnAddBookToCart(selectedBook!)}
              isLoading={
                Boolean(bookBeingAddedToCart) &&
                bookBeingAddedToCart?.id === selectedBook?.id
              }
              isDisabled={!isLoggedIn}
            >
              {isLoggedIn ? "Add to cart" : "Login to add to cart"}
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BookDetailsDrawers;
