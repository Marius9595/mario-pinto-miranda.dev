import React from 'react';

import { Box, Container,} from '@chakra-ui/react';

import { ImageAuthor } from '../molecules/image-author';
import { AboutAuthor } from '../molecules/about-author';


export const AuthorBlogCover = () => {
  return (
    <Container maxW={'7xl'} p={{md: '12', sm: '0'}}>
      <Box
        marginTop={{ base: '1', sm: '2' }}
        display="flex"
        flexDirection={{ base: 'column-reverse', sm: 'row' }}
        justifyContent="space-between">
        <AboutAuthor/>
        <ImageAuthor/>
      </Box>
    </Container>
  );
};




