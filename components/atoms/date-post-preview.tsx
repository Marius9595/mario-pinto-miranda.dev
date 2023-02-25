import React from 'react';
import { Tag } from '@chakra-ui/react';

interface DatePostPreviewProps {
  date: string;
}
export const DatePostPreview = ({ date }: DatePostPreviewProps) => {
  return (
    <Tag marginTop={2} size={'sm'} variant="outline" colorScheme="gray">
      {new Date(date).toLocaleDateString()}
    </Tag>
  );
};
