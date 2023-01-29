"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Heading,
  Highlight,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import ContentContainer from "@atoms/ContentContainer";
import Emoji from "@atoms/Emoji";
import { ChevronDownIcon } from "@chakra-ui/icons";
import routes from "constants/routes";

const AppBar = () => (
  <Box borderBottomWidth="1px">
    <ContentContainer
      paddingY={4}
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
    >
      <Link href={routes.home}>
        <Heading size="md">
          {" "}
          <Emoji name="book" /> Library
        </Heading>
      </Link>
      <Flex gap={2}>
        <Button
          variant="outline"
          display="flex"
          gap={2}
          alignItems="center"
          fontWeight="medium"
          as={Link}
          href={routes.cart}
        >
          <Emoji name="cart" />
          <Highlight
            query={["2"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: `green.100`,
            }}
          >
            2
          </Highlight>
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="outline"
          >
            <Emoji name="person" />
          </MenuButton>
          <MenuList>
            <MenuGroup title="I have an account">
              <Link href={routes.login}>
                <MenuItem icon={<Emoji name="wavingHand" />}>Login</MenuItem>
              </Link>
            </MenuGroup>
            <MenuGroup title="Or">
              <Link href={routes.register}>
                <MenuItem icon={<Emoji name="callMeHand" />}>Register</MenuItem>
              </Link>
            </MenuGroup>
            <MenuGroup title="Alan Morales">
              <Link href={routes.login}>
                <MenuItem icon={<Emoji name="victoryHand" />}>Logout</MenuItem>
              </Link>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </ContentContainer>
  </Box>
);

export default AppBar;
