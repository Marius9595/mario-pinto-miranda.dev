import React from 'react';

import { Heading, Flex, Box } from '@chakra-ui/react';

import { PostPreview, Post } from '../organisms/post-preview';


interface Props {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <Box marginTop={{base:"8", sm:"10", md:"10"}}>
      <Flex maxW={'max'} p={{md:"12", base:"4", sm:"4"}} flexWrap="wrap">
          {posts.map((post) => (
            <PostPreview  
              imageUrl={post.imageUrl}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
              title={post.title}
              tags={post.tags}
            />
          ))}
      </Flex>
    </Box>
  )
}