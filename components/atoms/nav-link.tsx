import React from "react";
import { Link, Text } from "@chakra-ui/react";

export const NavLink = ({ text, href }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "orange.500"
    }}
    href={href}
  >
    <Text>{text}</Text>
  </Link>
);
