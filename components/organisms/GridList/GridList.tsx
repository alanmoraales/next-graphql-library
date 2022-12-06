import { ReactNode } from "react";
import styles from "./grid-list.module.css";

interface IGridListProps {
  children: ReactNode;
}

const GridList = ({ children }: IGridListProps) => (
  <div className={styles["grid-list"]}>{children}</div>
);

export default GridList;
