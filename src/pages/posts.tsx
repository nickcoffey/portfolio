import Link from 'next/link'
import Head from 'next/head'
import { supabase } from '@/supabase/utils'
import { getFormattedDate, getPageTitle } from '@/utils'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import type { Post } from '@/supabase/utils'

export const getStaticProps: GetStaticProps<{ posts: Post[] | null }> = async () => {
  const { data, error } = await supabase.from('posts').select().eq('published', true).order('id', { ascending: false })
  if (error) {
    console.error(error)
  }

  return { props: { posts: data }, revalidate: 10 }
}

export default function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{getPageTitle('Posts')}</title>
      </Head>
      <main className='flex flex-col gap-12'>
        <h1 className='font-bold text-4xl'>Posts</h1>
        {posts?.map(({ id, title, created_at, description }) => (
          <section key={id}>
            <Link href={`/posts/${id}`}>
              <div className='flex flex-col gap-2 group'>
                <h2 className='font-bold text-2xl group-hover:underline'>{title}</h2>
                <p className='text-gray-400'>{getFormattedDate(created_at)}</p>
                <p className='text-gray-400'>{description}</p>
              </div>
            </Link>
          </section>
        ))}
      </main>
    </>
  )
}
