import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import skate from "../assets/images/skateborad.png";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const bgSecundaryTextColor = useColorModeValue("grey.600", "grey.400");

  return (
    <VStack
    w="full"
    h="full"
    p={10}
    m={0}
    alignItems="flex-start"
    bg={bgColor}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          if the price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="textButton" colorScheme="black">
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={3} w={24}>
          <Image src={skate} alt="skateborad"></Image>
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="center">
            <Heading size="md">Penny board</Heading>
            <Text color={bgSecundaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={bgSecundaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={bgSecundaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={bgSecundaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={bgSecundaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
