"use client";

import { Else, If, Then } from "react-if";
import { useUserCartQuery } from "services/graphql";
import CartBooksList from "./CartBooksList";
import EmptyCart from "./EmptyCart";

const CartList = () => {
  const { data, loading } = useUserCartQuery();
  const cartItems = data?.cart.items || [];
  const cartItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const cartIsEmpty = cartItemsCount === 0 && !loading;

  return (
    <If condition={cartIsEmpty}>
      <Then>
        <EmptyCart />
      </Then>
      <Else>
        <CartBooksList />
      </Else>
    </If>
  );
};

export default CartList;
