import { supabase } from '@/supabase/utils'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import type { Post } from '@/supabase/utils'

export const getStaticProps: GetStaticProps<{ posts: Post[] | null }> = async () => {
  const { data, error } = await supabase.from('posts').select()
  if (error) {
    console.error(error)
  }

  return { props: { posts: data } }
}

export default function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts?.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </main>
  )
}
