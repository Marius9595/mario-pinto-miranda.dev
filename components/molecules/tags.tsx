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
    <HStack
     spacing={2}
     marginTop={props.marginTop}
     alignSelf={{base:"center", sm:"center", md:"start"}}
     >
      {props.tags.map((tag) => {
        return (
          <Tag 
          variant="solid" 
          colorScheme="orange"
          key={tag} 
          fontSize={{base:'small', sm: "xx-small", md: "small", lg:'1xl' }}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
