import { Box } from '@chakra-ui/react'
import markdownStyles from './../markdown-styles.module.css'

type Props = {
  content: string
}

export const PostBody = ({ content }: Props) => {
  return (
    <Box>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  )
}
