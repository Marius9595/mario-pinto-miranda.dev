import Link from 'next/link';

import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link href="/">
                <Text fontWeight={'bold'}>🧑🏽‍💻 Home</Text>
            </Link>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
}