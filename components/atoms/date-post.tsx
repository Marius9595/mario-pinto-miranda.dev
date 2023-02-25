import React from 'react';
import { Tag } from '@chakra-ui/react';

interface DatePostProps {
  date: string
  size: string
  marginTop: number
}
export const DatePost = ({ date, size, marginTop }: DatePostProps) => {
  return (
    <Tag marginTop={marginTop} size={size} variant="outline" colorScheme="gray">
      {new Date(date).toLocaleDateString()}
    </Tag>
  );
};
