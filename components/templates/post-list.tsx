import React from 'react';

import { Heading, Flex } from '@chakra-ui/react';

import { PostPreview, Post } from '../organisms/post-preview';


interface Props {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <>
    <Heading textAlign={'center'}>Últimos Posts</Heading>
    <Flex maxW={'max'} p="12" flexWrap="wrap">
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
    </>
  )
}