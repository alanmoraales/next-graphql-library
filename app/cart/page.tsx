"use client";

import BookCoverImage from "@atoms/BookCoverImage";
import ContentContainer from "@atoms/ContentContainer";
import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useUserCartQuery } from "services/graphql";

const Cart = () => {
  const { data } = useUserCartQuery();
  const cartItems = data?.cart.items || [];
  const cartItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      <ContentContainer
        paddingY={8}
        gap={8}
        paddingBottom="calc(var(--chakra-space-8) + 129px)"
      >
        <Heading size="lg">Your Cart</Heading>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "80% 1fr",
            md: "60% 1fr",
            lg: "50% 1fr",
          }}
          gap={16}
          position="relative"
        >
          <Flex direction="column" gap={4}>
            {cartItems.map((item) => (
              <Grid
                key={item.id}
                gridTemplateColumns="30% 1fr"
                gap={4}
                borderWidth="1px"
                borderRadius="md"
                padding={4}
              >
                <BookCoverImage
                  src={item.book.coverSrc}
                  alt={item.book.title}
                  isSquare
                />
                <Flex direction="column" gap={2} justifyContent="space-between">
                  <Flex direction="column" gap={1}>
                    <Heading size="sm" noOfLines={2}>
                      {item.book.title}
                    </Heading>
                    <Text fontSize="sm">
                      {item.book.author}, {item.book.year}.
                    </Text>
                  </Flex>
                  <Text fontSize="sm">{item.quantity} added.</Text>
                  <Button
                    variant="outline"
                    colorScheme="red"
                    size="sm"
                    width="fit-content"
                  >
                    Remove
                  </Button>
                </Flex>
              </Grid>
            ))}
          </Flex>
          <Flex
            direction="column"
            gap={4}
            display={{ base: "none", md: "flex" }}
            borderWidth="thin"
            height="fit-content"
            borderRadius="md"
            padding={4}
            position="sticky"
            top="105px"
          >
            <Flex direction="column" gap={2}>
              <Heading size="md">Summary</Heading>
              <Text fontSize="md">
                {`You're selecting ${cartItemsCount} books to pickup later. You'll receive an email with a QR code to pickup your books.`}
              </Text>
            </Flex>
            <Button colorScheme="purple" variant="solid" size="md">
              Finish reservation
            </Button>
          </Flex>
        </Grid>
      </ContentContainer>
      <Flex
        borderTopWidth="thin"
        position="fixed"
        bottom="0"
        width="100%"
        background="rgba(255, 255, 255, 0.9)"
        backdropFilter="blur(14.5px)"
        display={{ base: "flex", md: "none" }}
      >
        <ContentContainer gap={4} paddingY={8}>
          <Flex direction="column" gap={2}>
            <Heading size="sm">Summary</Heading>
            <Text fontSize="sm">
              {`You're selecting ${cartItemsCount} books to pickup later. You'll receive an email with a QR code to pickup your books.`}
            </Text>
          </Flex>
          <Button colorScheme="purple" variant="solid" size="sm">
            Finish reservation
          </Button>
        </ContentContainer>
      </Flex>
    </>
  );
};

export default Cart;
