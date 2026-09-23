import { Link, Stack } from "@chakra-ui/react";

const items = [
  { label: "Dashboard", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Settings", href: "#" },
];

export function Sidebar() {
  return (
    <Stack
      as="nav"
      aria-label="メインナビゲーション"
      gridArea="sidebar"
      hideBelow="md"
      gap="1"
      p="3"
      overflowY="auto"
      borderEndWidth="1px"
      bg="bg.subtle"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          px="3"
          py="2"
          rounded="md"
          _hover={{ bg: "bg.muted", textDecoration: "none" }}
        >
          {item.label}
        </Link>
      ))}
    </Stack>
  );
}
