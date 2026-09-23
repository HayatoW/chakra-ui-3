import { Container, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) {
  return (
    <Flex as="main" gridArea="main" direction="column" overflowY="auto">
      <Container maxW="5xl" py="6">
        {children}
      </Container>
    </Flex>
  );
}
