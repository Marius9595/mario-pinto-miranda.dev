import React from 'react';
import {
  HStack,
  Tag,
  SpaceProps
} from '@chakra-ui/react';

export interface ITags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

export const Tags: React.FC<ITags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
