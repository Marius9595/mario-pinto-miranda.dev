import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Icon,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdCode } from 'react-icons/md'
import { NavLink } from "../atoms/nav-link";


export  function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"orange.600"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
          
            <Link href="/" _hover={{textDecoration: "none"}}>
            <Flex alignItems="center">
                <Icon as={MdCode} w={8} h={8} marginEnd={2}/>
                <Text fontSize="l" fontWeight="bold">
                  Mario S. Pinto Miranda
                </Text>
              </Flex>
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink text="Blog" href="blog"></NavLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={"nav"} spacing={4}>
              <NavLink text="Blog" href="blog"></NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
