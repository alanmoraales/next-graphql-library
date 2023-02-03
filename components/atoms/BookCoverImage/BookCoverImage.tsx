"use client";

import { Box, Image, AspectRatio } from "@chakra-ui/react";
import { If, Then, Else } from "react-if";

interface IBookCoverImageProps {
  src: string;
  alt: string;
  isSquare?: boolean;
  height?: string;
  maxHeight?: string;
}

const BookCoverImage = ({
  src,
  alt,
  isSquare = false,
  ...imageContainerProps
}: IBookCoverImageProps) => {
  const imageWithBackground = (
    <Box backgroundColor="purple.50" borderRadius="md" {...imageContainerProps}>
      <Image
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        objectFit="contain"
      />
    </Box>
  );

  return (
    <If condition={isSquare}>
      <Then>
        <AspectRatio ratio={1}>{imageWithBackground}</AspectRatio>
      </Then>
      <Else>{imageWithBackground}</Else>
    </If>
  );
};

export default BookCoverImage;
