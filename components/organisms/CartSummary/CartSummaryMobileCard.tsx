import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import ContentContainer from "@atoms/ContentContainer";

interface ICartSummaryMobileCard {
  children: ReactNode;
}

const CartSummaryMobileCard = ({ children }: ICartSummaryMobileCard) => {
  return (
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
        {children}
      </ContentContainer>
    </Flex>
  );
};

export default CartSummaryMobileCard;
