import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { Box } from '@chakra-ui/react'
import Nav from '../../components/navbar'



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
              <Box>
                <Nav></Nav>
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
