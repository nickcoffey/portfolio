import { useEffect } from 'react'
import { useRemark } from 'react-remark'
import rehypeSlug from 'rehype-slug'
import styles from './markdown.module.css'

type MarkdownProps = {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  const [markdown, setMarkdown] = useRemark({
    // @ts-ignore
    rehypePlugins: [rehypeSlug]
  })

  useEffect(() => {
    setMarkdown(content)
  }, [])

  return (
    <div className={styles.container}>
      {markdown}
    </div>
  )
}
