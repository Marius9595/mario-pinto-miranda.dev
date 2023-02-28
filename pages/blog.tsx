import { Nav } from '../components/organisms/navbar'
import {Footer} from '../components/organisms/footer'
import {Meta} from '../components/organisms/meta'
import { Box,  } from '@chakra-ui/react'
import { PostList } from '../components/templates/post-list'
import { getAllPosts } from '../lib/api'
import { Post } from '../components/organisms/post-preview'

interface Props {
    allPosts: Post[]
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

export default function Timeline({allPosts}) {

  return (
    <>
        <Meta
          title='Blog'
          description='Blog de Mario Pinto Miranda con todos los posts'
        />
        <Box>
          <Nav></Nav>
          <PostList posts={allPosts} />
        </Box>
        <Footer/>
    </>
  )
}