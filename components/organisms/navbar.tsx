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
  Text,
  Button,
  useColorMode
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdCode } from 'react-icons/md'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavLink } from "../atoms/nav-link";


export  function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  let backgroundColor;
  colorMode === 'light' ? backgroundColor="orange.500" : backgroundColor="orange.600"

  return (
    <>
      <Box
       bg={backgroundColor}
      px={4}
      >
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
                <Text display={{base:"none", sm:"none", md:"inherit"}} fontSize="l" fontWeight="bold">
                  Mario S. Pinto Miranda
                </Text>
                <Text marginEnd={0.5} fontSize="l" fontWeight="bold" display={{md:"none"}}>
                  Mario Pinto
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
          <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
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
