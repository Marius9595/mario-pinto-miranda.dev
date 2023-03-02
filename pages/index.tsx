import {PostList as PostList} from '../components/templates/post-list'
import { AuthorBlogCover } from '../components/organisms/author-blog-cover'
import { getAllPosts } from '../lib/api'
import { Nav } from '../components/organisms/navbar'
import {Footer} from '../components/organisms/footer'
import {Meta} from '../components/organisms/meta'
import { Box, Heading } from '@chakra-ui/react'
import { Post } from '../components/organisms/post-preview'

interface Props {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
        <Meta
          title='Mario S. Pinto Miranda | Software Developer'
          description='web site of Mario Pinto Miranda'
        />
        <Box>
          <Nav></Nav>
          <AuthorBlogCover></AuthorBlogCover>
          <Heading as="h2" textAlign={'center'} fontSize={{ base: "1xl", sm: "2xl", md: "3xl", lg:'4xl' }} >
            Últimos Posts 🔽
          </Heading>
          <PostList posts={allPosts.slice(0,3)} />
        </Box>
        <Footer/>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'imageUrl',
    'tags'
  ])

  return {
    props: { allPosts },
  }
}
