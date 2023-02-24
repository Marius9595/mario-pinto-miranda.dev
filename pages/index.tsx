import {PostList as PostList} from '../components/post-list'
import { Intro } from '../components/intro'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Nav from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'
import { Box } from '@chakra-ui/react'
import { Post } from '../components/molecules/post-preview'

interface Props {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
        <Meta></Meta>
        <Head>
          <title>{`Mario Pinto Miranda`}</title>
        </Head>
        <Box>
          <Nav></Nav>
          <Intro></Intro>
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
