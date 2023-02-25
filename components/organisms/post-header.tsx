import { Box, Heading, Image } from '@chakra-ui/react'
import { DatePost } from '../atoms/date-post'
import { PostTags } from '../molecules/post-tags'

interface PostHeaderProps{
    srcImage: string
    title: string
    tags: string[]
    date: string
}

export const PostHeader = ({
    srcImage,
    title,
    tags,
    date
}:PostHeaderProps) => {
    return (
        <Box>
            <Image
                src={srcImage}
                alt='algo'
                objectFit="cover"
                height="20%"
            />
            <Heading>
                {title}
            </Heading>
            <DatePost date={date} size='lg' marginTop={2} />
            <PostTags tags={tags} marginTop="2" size={'lg'} />
        </Box>
    )
}