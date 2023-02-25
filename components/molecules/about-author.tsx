import React from 'react';
import {
  Box,
  Heading, Text, useColorModeValue
} from '@chakra-ui/react';
import { Tags } from './tags';

export const AboutAuthor = () => {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      marginTop={{ base: '3', sm: '0' }}>

      <Heading as="h1">Mario S. Pinto Miranda</Heading>
      <Text marginBottom={2} fontSize="x-large">
        (Software Developer)
      </Text>
      <Tags tags={['Data', 'Web', 'Mobile']} />

      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="x-large">
        Entusiasta, pragmático y alineado con las mejores prácticas
        para desarrollar software de calidad
      </Text>
    </Box>
  );
};
