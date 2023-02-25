import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { PostBody } from '../../components/organisms/post-body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { Box, Text } from '@chakra-ui/react'
import {Nav} from '../../components/organisms/navbar'
import { PostHeader } from '../../components/organisms/post-header'


export default function Post( {post} ) {
  const router = useRouter()
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
      <Box>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.imageUrl} />
              </Head>
              <Nav></Nav>
              <Box marginX={'15%'} marginTop={'5%'}>
                <PostHeader
                  title={post.title}
                  srcImage={post.coverImage}
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
