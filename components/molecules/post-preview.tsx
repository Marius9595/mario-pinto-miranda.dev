import React from 'react';

import Link from 'next/link';

import {Box,Heading,Text,Tag,Wrap,WrapItem,} from '@chakra-ui/react';

import { ImagePostPreview } from '../atoms/image-post-preview';
import { BlogTags } from '../atoms/blog-tags';



export interface Post {
    slug: string
    title: string
    date: string
    coverImage: string
    excerpt: string
    imageUrl: string
    content: string
}

export const PostPreview = (postPreview:Post) =>{
    return (
      <Box flex={1}>
        <Wrap spacing="30px" marginTop="5">
            <WrapItem width={{ base: '100%', sm: '60%', md: '70%', lg: '80%' }}>
              <Box borderRadius="lg" overflow="hidden">
                <ImagePostPreview 
                  src={postPreview.imageUrl}
                  alt='algo'
                />
                <Heading fontSize="xl" marginTop="2">
                <Link
                    as={`/posts/${postPreview.slug}`}
                    href="/posts/[slug]"
                    >
                    {postPreview.title}
                </Link>
                </Heading>
                <Tag marginTop={2} size={'sm'} variant="outline" colorScheme="gray" >
                    {new Date(postPreview.date).toLocaleDateString()}
                </Tag>
                <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
                <Text as="p" fontSize="md" marginTop="2">
                  {postPreview.excerpt}
                </Text>
              </Box>
            </WrapItem>
        </Wrap>
      </Box>
    )
  }