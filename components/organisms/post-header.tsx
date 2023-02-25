import { Box, Heading, Image } from '@chakra-ui/react'

interface PostHeaderProps{
    srcImage: string
    title: string
}

export const PostHeader = ({
    srcImage,
    title
}:PostHeaderProps) => {
    return (
        <Box>
            <Image
                transform="scale(1.0)"
                src={srcImage}
                alt='algo'
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                    transform: 'scale(1.05)',
                }} />
            <Heading>
                {title}
            </Heading>
        </Box>
    )
}