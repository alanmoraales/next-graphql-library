"use client";

import { Flex } from "@chakra-ui/react";
import AppBar from "@organisms/AppBar";

interface IAppTemplateProps {
  children: React.ReactNode;
}

const AppTemplate = ({ children }: IAppTemplateProps) => {
  return (
    <Flex direction="column" gap={4}>
      <AppBar />
      {children}
    </Flex>
  );
};

export default AppTemplate;
