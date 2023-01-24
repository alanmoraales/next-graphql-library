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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface IBookCardProps {
  title: string;
  coverUrl: string;
  availableQuantity: number;
  detailsUrl: string;
  onAddToCart: () => void;
  isAddingToCart: boolean;
}

//
const BookCard = ({
  title,
  coverUrl,
  availableQuantity,
  detailsUrl,
  onAddToCart,
  isAddingToCart,
}: IBookCardProps) => {
  const availableString = `${availableQuantity} disponibles.`;
  const highlightColor = availableQuantity > 3 ? "green" : "red";

  return (
    <Card variant="outline">
      <Flex direction="column" width="100%" height="100%" padding={4} gap={4}>
        <Box
          position="relative"
          paddingBottom="100%"
          backgroundColor="purple.50"
          borderRadius="md"
        >
          <Image
            src={coverUrl}
            alt={title}
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="0"
            objectFit="contain"
          />
        </Box>
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
            onClick={onAddToCart}
          >
            <ChakraLink
              href={detailsUrl}
              width="full"
              paddingInlineStart={3}
              paddingInlineEnd={3}
              display="grid"
              placeItems="center"
              height="full"
              pointerEvents={isAddingToCart ? "none" : "auto"}
              as={Link}
            >
              Ver más
            </ChakraLink>
          </Button>
          <Tooltip label="Añadir al carrito" openDelay={500}>
            <IconButton
              aria-label="Add to friends"
              icon={<AddIcon />}
              variant="outline"
              colorScheme="purple"
              isLoading={isAddingToCart}
            />
          </Tooltip>
        </ButtonGroup>
      </Flex>
    </Card>
  );
};

export default BookCard;
