import React from 'react';
import { Heading } from '@chakra-ui/react';


export const AuthorName = () => {
  return(
    <Heading
      as="h1" 
      fontSize={{ base: "2xl", sm: "2xl", md: "4xl", xl:'5xl' }}
    >
      Mario S. Pinto Miranda
    </Heading>
  )
};