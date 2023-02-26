import React from 'react';
import { Text, useColorModeValue } from '@chakra-ui/react';

export const AuthorDescription = () => {
  return (
    <Text
      as="p"
      marginTop="2"
      color={useColorModeValue('gray.700', 'gray.200')}
      fontSize={{ base: "x-large", sm: "medium", md: "3xl" }}
    >
      Entusiasta, pragmático y alineado con las mejores prácticas
      para desarrollar software de calidad
    </Text>
  )
};
