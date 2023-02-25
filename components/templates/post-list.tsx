import React from 'react';

import { Heading, Flex, Box } from '@chakra-ui/react';

import { PostPreview, Post } from '../organisms/post-preview';


interface Props {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <Box marginTop={{base:"8", sm:"10", md:"10"}}>
      <Heading as="h2" textAlign={'center'} fontSize={{sm: "medium", md: "x-large"}} >
        Últimos Posts
      </Heading>
      <Flex maxW={'max'} p={{md:"12", base:"4"}} flexWrap="wrap">
          {posts.map((post) => (
            <PostPreview  
              imageUrl={post.imageUrl}
              content={undefined}
              coverImage={undefined}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
              title={post.title}
            />
          ))}
      </Flex>
    </Box>
  )
}