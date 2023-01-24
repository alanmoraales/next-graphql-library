"use client";
import { useQuery, gql } from "@apollo/client";
import BookCard from "@molecules/BookCard";
import GridList from "components/organisms/GridList";

type Book = {
  title: string;
  description: string;
  id: number;
  imageUrl: string;
  availableQuantity: number;
};

const useAllBooks = (): Book[] => {
  const query = gql`
    {
      allBooks {
        title
        description
        id
        imageUrl
        availableQuantity
      }
    }
  `;
  const queryResponse = useQuery(query);
  return (queryResponse.data?.allBooks || []) as Book[];
};

const Home = () => {
  const books = useAllBooks();

  return (
    <div>
      <h1>Available Books</h1>
      <GridList>
        {books.map(({ title, imageUrl, id, availableQuantity }) => (
          <BookCard
            key={id}
            title={title}
            coverUrl={imageUrl}
            availableQuantity={availableQuantity}
            onAddToCart={() => {}}
            detailsUrl="/"
            isAddingToCart={false}
          />
        ))}
      </GridList>
    </div>
  );
};

export default Home;
