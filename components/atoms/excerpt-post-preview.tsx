import React from 'react';
import { Text } from '@chakra-ui/react';

interface ExcerptPostPreviewProps {
  text: string;
}
export const ExcerptPostPreview = ({ text }: ExcerptPostPreviewProps) => {
  return (
    <Text as="p" fontSize="md" marginTop="2">
      {text}
    </Text>
  )
};
