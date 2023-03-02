import React from 'react';

import {Box} from '@chakra-ui/react';

import { Tags } from './tags';
import { AuthorDescription } from '../atoms/author-description';
import { RoleOfAuthor } from '../atoms/role-of-author';
import { AuthorName } from '../atoms/author-name';

export const AboutAuthor = () => {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      marginTop={{ base: '3', sm: '0' }}
      textAlign={{base:"center", sm:"center", md:"start"}}
    >
      <AuthorName/>
      <RoleOfAuthor/>
      <Tags tags={['Data', 'Web', 'Mobile']} />
      <AuthorDescription/>
    </Box>
  );
};



