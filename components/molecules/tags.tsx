import React from 'react';
import {
  HStack,
  Tag,
  SpaceProps
} from '@chakra-ui/react';

export interface ITags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
  size:string
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
          size={props.size} 
          variant="solid" 
          colorScheme="orange"
          key={tag} 
          fontSize={{sm: "medium", md: "3xl" }}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
