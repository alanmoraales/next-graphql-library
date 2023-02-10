import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface ICartSummaryDesktopCard {
  children: ReactNode;
}

const CartSummaryDesktopCard = ({ children }: ICartSummaryDesktopCard) => {
  return (
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
      {children}
    </Flex>
  );
};

export default CartSummaryDesktopCard;
