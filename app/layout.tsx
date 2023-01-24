"use client";
import { ReactNode } from "react";
import { Open_Sans } from "@next/font/google";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

const openSansFont = Open_Sans({ weight: ["300", "400", "500", "700"] });

const apolloClient = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps) => (
  <html lang="en" className={openSansFont.className}>
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <body>
      <ChakraProvider>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </ChakraProvider>
    </body>
  </html>
);

export default RootLayout;
