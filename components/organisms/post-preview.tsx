import React from 'react';

import Link from 'next/link';

import {Box,Wrap,WrapItem,} from '@chakra-ui/react';

import { ImagePostPreview } from '../atoms/image-post-preview';
import { PostTags } from '../molecules/post-tags';
import { TitlePostPreview } from '../atoms/title-post-preview';
import { DatePost } from '../atoms/date-post';
import { ExcerptPostPreview } from '../atoms/excerpt-post-preview';


export interface Post {
    slug: string
    title: string
    date: string
    excerpt: string
    imageUrl: string
    tags: string
}

export const PostPreview = (postPreview:Post) =>{
    return (
      <Box flex={1} marginX="5">
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
                <DatePost date={postPreview.date} size={{base:'sm'}} marginTop={2} />
                <PostTags tags={postPreview.tags.split(',')} marginTop="3" size='md'/>
                <ExcerptPostPreview text={postPreview.excerpt}/>
              </Box>
            </WrapItem>
        </Wrap>
      </Box>
    )
}