import ReadingBookAtParkIllustration from "@atoms/ReadingBookAtParkIllustration";
import { Box } from "@chakra-ui/react";

const EmptyCart = () => {
  return (
    <Box paddingTop={4} maxHeight={{ base: "295px", md: "unset" }}>
      <ReadingBookAtParkIllustration />
    </Box>
  );
};

export default EmptyCart;
