/* eslint-disable @next/next/no-img-element */
import styles from "./book-card.module.css";

interface IBookCardProps {
  title: string;
  coverUrl: string;
}

const BookCard = ({ title, coverUrl }: IBookCardProps) => (
  <div className={styles["book-card__container"]}>
    <div className={styles["book-card__cover-container"]}>
      <img src={coverUrl} alt={title} className={styles["book-card__cover"]} />
    </div>
    <div>
      <h3 className={styles["book-card__title"]}>{title}</h3>
    </div>
  </div>
);

export default BookCard;
