import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

import { PostPreview, Post } from '../organisms/post-preview';


interface Props {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <Box marginTop={{base:"0", sm:"05", md:"5", lg:"8"}}>
      <Flex maxW={'max'} p={{base:"0", sm:"2", md:"8", lg:"10"}} flexWrap="wrap">
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