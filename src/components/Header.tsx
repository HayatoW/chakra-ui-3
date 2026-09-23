import { Flex, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      gridArea="header"
      align="center"
      h="14"
      px="4"
      borderBottomWidth="1px"
      bg="bg"
    >
      <Heading as="h1" size="md">
        App
      </Heading>
    </Flex>
  );
}
