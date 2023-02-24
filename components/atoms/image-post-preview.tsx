
import React from 'react';

import { Box, Image, Link } from '@chakra-ui/react';


interface ImagePostPreviewProps{
    src: string
    alt: string
  }

 export const ImagePostPreview = (props:ImagePostPreviewProps) => {
    return (
        <Box >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                transform="scale(1.0)"
                src={props.src}
                alt={props.alt}
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                    transform: 'scale(1.05)',
                }} />
            </Link>
      </Box>
    )
  }