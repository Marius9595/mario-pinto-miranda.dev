import React from "react";
import { Link, Text, useColorMode } from "@chakra-ui/react";

export const NavLink = ({ text, href }) =>{
  const { colorMode } = useColorMode();
  let backgroundColorHover;
  colorMode === 'light'? backgroundColorHover = 'orange.400':backgroundColorHover = 'orange.500'
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: backgroundColorHover
      }}
      href={href}
    >
      <Text>{text}</Text>
    </Link>
  );
  }
