import { supabase } from '@/supabase/utils'
import { getFormattedDate } from '@/utils'
import { Markdown } from '@/components'
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import type { Post } from '@/supabase/utils'

type PostParams = { id: string }

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const { data, error } = await supabase.from('posts').select('id').eq('published', true)
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
  return { props: { post: data && data[0] }, revalidate: 10 }
}

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className='flex flex-col gap-12'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-4xl'>{post?.title}</h1>
        <p className='text-gray-400'>{post && getFormattedDate(post.created_at)}</p>
        <p className='text-gray-400'>{post?.description}</p>
      </div>
      {post && <Markdown content={post.body} />}
    </main>
  )
}
