"use client";

import BookCoverImage from "@atoms/BookCoverImage";
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

interface IBookDetailsDrawerProps {
  bookTitle: string;
  bookDescription: string;
  bookImageUrl: string;
  onClose: () => void;
  onAddToCart: () => void;
  isAddingToCart: boolean;
  isOpen: boolean;
}

// TODO: Read props from context, instead of passing them down
// TODO: Disable closing the drawer when adding to cart
// TODO: Auto close drawer after adding to cart successfully
const BookDetailsDrawers = ({
  bookTitle,
  bookDescription,
  bookImageUrl,
  isOpen,
  isAddingToCart,
  onClose,
  onAddToCart,
}: IBookDetailsDrawerProps) => (
  <Drawer
    isOpen={Boolean(isOpen && bookTitle && bookDescription && bookImageUrl)}
    onClose={onClose}
    placement="bottom"
    size="md"
  >
    <DrawerOverlay />
    <DrawerContent height={{ base: "100dvh", md: "60svh" }}>
      <DrawerHeader>
        <Flex
          gap={4}
          justifyContent="space-between"
          width={{ base: "100%", sm: "80%", lg: "60%", xl: "40%" }}
          margin="0 auto"
          paddingTop={2}
          alignItems="baseline"
        >
          <Heading size="md">{bookTitle}</Heading>
          <IconButton
            icon={<CloseIcon />}
            onClick={onClose}
            aria-label="Close book synopsis"
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
          <BookCoverImage src={bookImageUrl} alt={bookTitle} height="250px" />
          <Flex direction="column" gap={2}>
            <Heading size="sm">Sinopsis</Heading>
            <Text fontSize="xl" as="cite">
              {bookDescription}
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
            isLoading={isAddingToCart}
            onClick={onAddToCart}
          >
            Agregar al carrito
          </Button>
        </Flex>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default BookDetailsDrawers;
