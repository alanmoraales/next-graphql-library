"use client";
import { Flex, FlexProps } from "@chakra-ui/react";

interface IContentContainerProps
  extends Omit<
    FlexProps,
    "width" | "maxWidth" | "margin" | "marginY" | "marginX"
  > {
  children: React.ReactNode;
}

/**
 *
 * Keeps the content within the defined width limits, it renders a chakra-ui `Flex` component.
 * You are able to pass any chakra-ui `Flex` component props
 * excluding the `width`, `maxWidth`, `margin`, `marginY` and `marginX` props.
 *
 * Default props:
 * - **Direction**: `column`.
 * - **PaddingY**: `4`.
 *
 */
const ContentContainer = ({
  children,
  direction = "column",
  paddingY = 4,
  ...restOfFlexProps
}: IContentContainerProps) => (
  <Flex
    width="90%"
    maxWidth="container.lg"
    marginY="0"
    marginX="auto"
    direction={direction}
    paddingY={paddingY}
    {...restOfFlexProps}
  >
    {children}
  </Flex>
);

export default ContentContainer;
