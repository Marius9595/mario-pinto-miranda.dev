import React from 'react';
import { Heading } from '@chakra-ui/react';

interface TitlePostPreviewProp {
  text: string;
}
export function TitlePostPreview({ text }: TitlePostPreviewProp) {
  return <Heading fontSize="xl" marginTop="2">
    {text}
  </Heading>;
}
