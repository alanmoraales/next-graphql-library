"use client";

import { Grid, Heading } from "@chakra-ui/react";
import ContentContainer from "@atoms/ContentContainer";
import {
  CartSummaryContent,
  CartSummaryDesktopCard,
  CartSummaryMobileCard,
} from "@organisms/CartSummary";
import CartList from "@organisms/CartList";

const Cart = () => {
  return (
    <>
      <ContentContainer
        paddingY={8}
        gap={8}
        paddingBottom={{ base: "calc(var(--chakra-space-8) + 129px)", md: 8 }}
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
          <CartList />
          <CartSummaryDesktopCard>
            <CartSummaryContent />
          </CartSummaryDesktopCard>
        </Grid>
      </ContentContainer>
      <CartSummaryMobileCard>
        <CartSummaryContent />
      </CartSummaryMobileCard>
    </>
  );
};

export default Cart;
