import {PostList as PostList} from '../components/templates/post-list'
import { AuthorBlogCover } from '../components/organisms/author-blog-cover'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { Nav } from '../components/organisms/navbar'
import Footer from '../components/organisms/footer'
import {Meta} from '../components/organisms/meta'
import { Box } from '@chakra-ui/react'
import { Post } from '../components/organisms/post-preview'

interface Props {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
        <Meta></Meta>
        <Head>
          <title>{`Home`}</title>
        </Head>
        <Box>
          <Nav></Nav>
          <AuthorBlogCover></AuthorBlogCover>
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
    'imageUrl'
  ])

  return {
    props: { allPosts },
  }
}
