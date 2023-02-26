import React from 'react';
import { Text } from '@chakra-ui/react';

interface SpanProps {
  text: string;
}
export const Span = ({ text }: SpanProps) => {
  return <Text as="span" fontWeight={'bold'}> {text} </Text>;
};
