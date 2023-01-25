"use client";

import { Box, Heading } from "@chakra-ui/react";
import ContentContainer from "@atoms/ContentContainer";

const AppBar = () => (
  <Box borderBottomWidth="1px">
    <ContentContainer paddingY={4}>
      <Heading size="md"> &#128214; Library</Heading>
    </ContentContainer>
  </Box>
);

export default AppBar;
