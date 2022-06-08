import NextLink from "next/link";
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h2">Not Found</Heading>
      <text>The page you are looking for was not found.</text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button bg={useColorModeValue("#7290A6", "#224263")}>
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
