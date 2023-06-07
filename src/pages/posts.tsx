import Link from 'next/link'
import { supabase } from '@/supabase/utils'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import type { Post } from '@/supabase/utils'

export const getStaticProps: GetStaticProps<{ posts: Post[] | null }> = async () => {
  const { data, error } = await supabase.from('posts').select().order('id', { ascending: false })
  if (error) {
    console.error(error)
  }

  return { props: { posts: data } }
}

export default function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className='flex flex-col gap-12'>
      <h1 className='font-bold text-4xl'>Posts</h1>
      {posts?.map(({ id, title, created_at, description }) => (
        <section key={id}>
          <Link href={`/posts/${id}`}>
            <div className='flex items-center gap-2 mb-4'>
              <h2 className='font-bold text-2xl'>{title}</h2>
              <p className='text-gray-400'>-</p>
              <p className='text-gray-400'>{new Date(created_at).toLocaleDateString()}</p>
            </div>
            <p className='text-gray-400'>{description}</p>
          </Link>
        </section>
      ))}
    </main>
  )
}
