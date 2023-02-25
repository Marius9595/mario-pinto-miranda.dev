import React from 'react';
import {HStack,Tag,SpaceProps} from '@chakra-ui/react';

interface PostTagsProps {
    tags: string[];
    size: string
    marginTop?: SpaceProps['marginTop'];
}


export const PostTags: React.FC<PostTagsProps> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={props.size} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};