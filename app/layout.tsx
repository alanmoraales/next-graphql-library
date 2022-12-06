import { ReactNode } from "react";
import { Open_Sans } from "@next/font/google";
import "./globals.css";

const openSansFont = Open_Sans({ weight: ["300", "400", "500", "700"] });

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
    <body>{children}</body>
  </html>
);

export default RootLayout;
