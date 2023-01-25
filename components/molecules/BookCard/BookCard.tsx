"use client";

import {
  Card,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Highlight,
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import BookCoverImage from "@atoms/BookCoverImage";

interface IBookCardProps {
  title: string;
  coverUrl: string;
  availableQuantity: number;
  onReadSynopsis: () => void;
  onAddToCart: () => void;
  isAddingToCart: boolean;
}

const BookCard = ({
  title,
  coverUrl,
  availableQuantity,
  onReadSynopsis,
  onAddToCart,
  isAddingToCart,
}: IBookCardProps) => {
  const availableString = `${availableQuantity} disponibles.`;
  const highlightColor = availableQuantity > 3 ? "green" : "red";

  return (
    <Card variant="outline">
      <Flex direction="column" width="100%" height="100%" padding={4} gap={4}>
        <BookCoverImage src={coverUrl} alt={title} isSquare />
        <Flex direction="column" gap={2}>
          <Heading size="sm" noOfLines={1}>
            {title}
          </Heading>
          <Text size="xs" as="em">
            <Highlight
              query={[`${availableQuantity}`]}
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                bg: `${highlightColor}.100`,
              }}
            >
              {availableString}
            </Highlight>
          </Text>
        </Flex>
        <ButtonGroup size="sm" isAttached variant="ghost">
          <Button
            width="full"
            variant="solid"
            colorScheme="purple"
            isDisabled={isAddingToCart}
            padding="0"
            onClick={onReadSynopsis}
          >
            Leer sinopsis
          </Button>
          <Tooltip label="Añadir al carrito" openDelay={500}>
            <IconButton
              aria-label="Add to friends"
              icon={<AddIcon />}
              variant="outline"
              colorScheme="purple"
              isLoading={isAddingToCart}
              onClick={onAddToCart}
            />
          </Tooltip>
        </ButtonGroup>
      </Flex>
    </Card>
  );
};

export default BookCard;
