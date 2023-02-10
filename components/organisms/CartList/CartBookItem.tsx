import BookCoverImage from "@atoms/BookCoverImage";
import { Button, Flex, Grid, Heading, Highlight, Text } from "@chakra-ui/react";

interface ICartBookItemProps {
  title: string;
  coverSrc: string;
  author: string;
  year: number;
  quantity: number;
}

const CartBookItem = ({
  title,
  coverSrc,
  author,
  year,
  quantity,
}: ICartBookItemProps) => {
  const quantityLabel = `${quantity} added.`;

  return (
    <Grid
      gridTemplateColumns="30% 1fr"
      gap={4}
      borderWidth="1px"
      borderRadius="md"
      padding={4}
    >
      <BookCoverImage src={coverSrc} alt={title} isSquare />
      <Flex direction="column" gap={2} justifyContent="space-between">
        <Flex direction="column" gap={1}>
          <Heading size="sm" noOfLines={2}>
            {title}
          </Heading>
          <Text fontSize="sm">{`${author}, ${year}.`}.</Text>
        </Flex>
        <Text fontSize="sm">
          <Highlight
            query={[`${quantityLabel}`]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: `green.100`,
            }}
          >
            {quantityLabel}
          </Highlight>
        </Text>
        <Button
          variant="outline"
          colorScheme="red"
          size="sm"
          width="fit-content"
        >
          Remove
        </Button>
      </Flex>
    </Grid>
  );
};

export default CartBookItem;
