import { Flex } from "@chakra-ui/react";
import CartBookItem from "./CartBookItem";
import { useUserCartQuery } from "services/graphql";

const CartBooksList = () => {
  const { data } = useUserCartQuery();
  const cartItems = data?.cart.items || [];

  return (
    <Flex direction="column" gap={4}>
      {cartItems.map((item) => {
        const { book, quantity, id } = item;
        return <CartBookItem key={id} quantity={quantity} {...book} />;
      })}
    </Flex>
  );
};

export default CartBooksList;
