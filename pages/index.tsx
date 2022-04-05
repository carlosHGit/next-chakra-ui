import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/sections/Cart";
import Details from "../src/sections/Details";

const IndexPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base:'auto', md:"100vh"}}
        // py={[0, 10, 20]}
        py={{base:0, md:10, large:20}}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default IndexPage;
