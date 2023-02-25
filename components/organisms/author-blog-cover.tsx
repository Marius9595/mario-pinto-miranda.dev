import React from 'react';

import { Box, Container,} from '@chakra-ui/react';

import { ImageAuthor } from '../molecules/image-author';
import { AboutAuthor } from '../molecules/about-author';


export const AuthorBlogCover = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <ImageAuthor/>
        <AboutAuthor/>
      </Box>
    </Container>
  );
};




