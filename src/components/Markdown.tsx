import { useEffect } from 'react'
import { useRemark } from 'react-remark'
import rehypeSlug from 'rehype-slug'
import rehypePrism from '@mapbox/rehype-prism'

type MarkdownProps = {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  const [markdown, setMarkdown] = useRemark({
    // @ts-ignore
    rehypePlugins: [rehypeSlug, rehypePrism]
  })

  useEffect(() => {
    setMarkdown(content)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div id='md-container'>{markdown}</div>
}
