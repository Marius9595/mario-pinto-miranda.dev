import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { PostBody } from '../../components/organisms/post-body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { Box } from '@chakra-ui/react'
import {Nav} from '../../components/organisms/navbar'
import { PostHeader } from '../../components/organisms/post-header'
import { Meta } from '../../components/organisms/meta'


export default function Post( {post} ) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
      <Box>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
              <Meta title={post.title}  description={post.excerpt}/>
              <Nav></Nav>
              <Box
                marginX={{base: "2%", sm:'5%', md:'5%',lg:'5%'}}
                paddingX={{base: "3%", sm:'3%', md:'10%',lg:'15%'}}
                paddingTop={{base: "5%", sm:'5%', md:'2%',lg:'5%'}}
              >
                <PostHeader
                  title={post.title}
                  tags={post.tags.split(',')}
                  date={post.date}
                />
                <PostBody content={post.content}/>
              </Box>
          </>
        )}
      </Box>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
