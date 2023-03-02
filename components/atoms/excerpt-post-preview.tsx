import React from 'react';
import { Text } from '@chakra-ui/react';

interface ExcerptPostPreviewProps {
  text: string;
}
export const ExcerptPostPreview = ({ text }: ExcerptPostPreviewProps) => {
  return (
    <Text as="p" fontSize={{base:'sm', sm:'sm', md:'md', lg:'lg'}} marginTop="2" textAlign={"justify"}>
      {text}
    </Text>
  )
};
