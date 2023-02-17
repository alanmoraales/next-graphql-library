"use client";

import { Flex } from "@chakra-ui/react";
import CartBookItem from "./CartBookItem";
import { useState } from "react";
import {
  AllBooksDocument,
  useRemoveBookFromUserCartMutation,
  useUserCartQuery,
} from "services/graphql";
import useNotification from "hooks/useNotification";

const CartBooksList = () => {
  const { data } = useUserCartQuery();
  const [removeBookFromCartMutation, { loading: isRemovingBook }] =
    useRemoveBookFromUserCartMutation();
  const [bookIdBeingRemoved, setBookIdBeingRemoved] = useState<
    number | undefined
  >(undefined);
  const notify = useNotification();
  const cartItems = data?.cart.items || [];

  const onRemoveBookFromCart = (bookId: number) => async () => {
    try {
      setBookIdBeingRemoved(bookId);
      await removeBookFromCartMutation({
        variables: {
          bookId,
        },
        refetchQueries: [{ query: AllBooksDocument }],
      });
      notify.success({ description: "Book removed from cart" });
    } catch (error: any) {
      notify.error({
        description:
          error.message || "Something went wrong while removing book from cart",
      });
    } finally {
      setBookIdBeingRemoved(undefined);
    }
  };

  return (
    <Flex direction="column" gap={4}>
      {cartItems.map((item) => {
        const { book, quantity, id } = item;
        return (
          <CartBookItem
            key={id}
            quantity={quantity}
            onRemove={onRemoveBookFromCart(book.id)}
            isRemoving={isRemovingBook && bookIdBeingRemoved === book.id}
            {...book}
          />
        );
      })}
    </Flex>
  );
};

export default CartBooksList;
