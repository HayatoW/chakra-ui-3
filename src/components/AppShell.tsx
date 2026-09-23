import { Grid } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <Grid
      h="100dvh"
      overflow="hidden"
      templateRows="auto minmax(0, 1fr)"
      templateColumns={{ base: "1fr", md: "240px 1fr" }}
      templateAreas={{
        base: `"header" "main"`,
        md: `"header header" "sidebar main"`,
      }}
    >
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </Grid>
  );
}
