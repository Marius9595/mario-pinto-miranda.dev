import { Box, Divider, Heading, Image } from '@chakra-ui/react'
import { DatePost } from '../atoms/date-post'
import { PostTags } from '../molecules/post-tags'

interface PostHeaderProps{
    title: string
    tags: string[]
    date: string
}

export const PostHeader = ({
    title,
    tags,
    date
}:PostHeaderProps) => {
    return (
        <Box>

            <Heading
              fontSize={{ base: "2xl", sm: "1xl", md: "3xl", xl:'5xl' }}
            >
                {title}
            </Heading>
            <DatePost date={date} size={{base:'md', sm:"md", md:"lg", lg:"lg"}} marginTop={2} />
            <PostTags tags={tags} marginTop="2" size={'lg'} />
        </Box>
    )
}