"use client";

import { Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import useNotification from "hooks/useNotification";
import {
  useCreateUserReserveMutation,
  useUserCartQuery,
} from "services/graphql";

const CartSummaryContent = () => {
  const { data } = useUserCartQuery();
  const cartItems = data?.cart.items || [];
  const cartItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const [createUserReservation, { loading }] = useCreateUserReserveMutation();
  const notify = useNotification();
  const countSuffixLabel = cartItemsCount === 1 ? "book" : "books";
  const cartItemsCountLabel = `${cartItemsCount} ${countSuffixLabel}`;
  const notEmptyCartText = `You're selecting ${cartItemsCountLabel} to pickup later. You'll receive an email with a QR code to pickup your books.`;
  const emptyCartText =
    "Your cart is empty. Add some books to create a reservation.";
  const cartIsEmpty = cartItemsCount === 0;
  const summaryText = cartIsEmpty ? emptyCartText : notEmptyCartText;

  const onCreateUserReservation = async () => {
    try {
      await createUserReservation({
        refetchQueries: ["UserCart"],
      });
      notify.success({ description: "Reservation created" });
    } catch (error: any) {
      notify.error({
        description:
          error.message || "Something went wrong while creating reservation",
      });
    }
  };

  return (
    <>
      <Flex direction="column" gap={2}>
        <Heading size={{ base: "sm", md: "md" }}>Summary</Heading>
        <Text fontSize={{ base: "sm", md: "md" }}>
          <Highlight
            query={[`${cartItemsCountLabel}`]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: `green.100`,
            }}
          >
            {summaryText}
          </Highlight>
        </Text>
      </Flex>
      <Button
        colorScheme="purple"
        variant="solid"
        size={{ base: "sm", md: "md" }}
        isDisabled={cartIsEmpty}
        onClick={onCreateUserReservation}
        isLoading={loading}
      >
        Finish reservation
      </Button>
    </>
  );
};

export default CartSummaryContent;
