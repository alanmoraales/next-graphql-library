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
import { ChevronDownIcon } from "@chakra-ui/icons";

const AppBar = () => (
  <Box borderBottomWidth="1px">
    <ContentContainer
      paddingY={4}
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
    >
      <Link href="/">
        <Heading size="md"> &#128214; Library</Heading>
      </Link>
      <Flex gap={2}>
        <Button
          variant="outline"
          display="flex"
          gap={2}
          alignItems="center"
          fontWeight="medium"
          as={Link}
          href="/cart"
        >
          &#128722;
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
            &#129489;
          </MenuButton>
          <MenuList>
            <MenuGroup title="I have an account">
              <MenuItem icon={<>&#128075;</>} as={Link} href="/login">
                Login
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="Or">
              <MenuItem icon={<>&#129305;</>} as={Link} href="/register">
                Register
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </ContentContainer>
  </Box>
);

export default AppBar;
