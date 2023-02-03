"use client";

import { ReactNode } from "react";
import { Open_Sans } from "@next/font/google";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";
import AppTemplate from "@organisms/AppTemplate";
import AuthGuard from "@organisms/AuthGuard";
import { AuthProvider } from "context/AuthContext";
import storage from "services/storage";

const openSansFont = Open_Sans({ weight: ["300", "400", "500", "700"] });

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = storage.getUserToken();
  return {
    headers: {
      ...headers,
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <AuthGuard>
              <AppTemplate>{children}</AppTemplate>
            </AuthGuard>
          </AuthProvider>
        </ApolloProvider>
      </ChakraProvider>
    </body>
  </html>
);

export default RootLayout;
