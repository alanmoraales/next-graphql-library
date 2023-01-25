"use client";
import { ReactNode } from "react";
import { Grid } from "@chakra-ui/react";

interface IGridListProps {
  children: ReactNode;
}

const GridList = ({ children }: IGridListProps) => (
  <Grid gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
    {children}
  </Grid>
);

export default GridList;
