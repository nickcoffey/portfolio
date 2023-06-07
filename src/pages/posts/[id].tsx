import { supabase } from '@/supabase/utils'
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import type { Post } from '@/supabase/utils'

type PostParams = { id: string }

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const { data, error } = await supabase.from('posts').select('id')
  if (error) {
    console.error(error)
  }

  return {
    paths: data?.map(({ id }) => ({ params: { id: id.toString() } })) || [{ params: { id: '' } }],
    fallback: false
  }
}

type PostProps = { post: Post | null }

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async context => {
  const { data, error } = await supabase.from('posts').select().eq('id', context.params?.id)
  if (error) {
    console.error(error)
  }
  return { props: { post: data && data[0] } }
}

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <h1>{post?.title}</h1>
      {/* @ts-ignore */}
      {post && Object.keys(post).map((key) => (<div>{key}: {post[key]}</div>))}
    </main>
  )
}
