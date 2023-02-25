import React from 'react';

import Link from 'next/link';

import {Box,Wrap,WrapItem,} from '@chakra-ui/react';

import { ImagePostPreview } from '../atoms/image-post-preview';
import { TagsPost } from '../molecules/blog-tags';
import { TitlePostPreview } from '../atoms/title-post-preview';
import { DatePostPreview } from '../atoms/date-post-preview';
import { ExcerptPostPreview } from '../atoms/excerpt-post-preview';


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
                <Link
                    as={`/posts/${postPreview.slug}`}
                    href="/posts/[slug]"
                 >
                  <ImagePostPreview src={postPreview.imageUrl} alt='algo'/>
                  <TitlePostPreview text={postPreview.title} />
                </Link>
                <DatePostPreview date={postPreview.date} />
                <TagsPost tags={['Engineering', 'Product']} marginTop="3" />
                <ExcerptPostPreview text={postPreview.excerpt}/>
              </Box>
            </WrapItem>
        </Wrap>
      </Box>
    )
}
