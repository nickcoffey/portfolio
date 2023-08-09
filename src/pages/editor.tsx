import Head from 'next/head'
import { useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { getPageTitle } from '@/utils'
import { Markdown } from '@/components'

const STORAGE_NAME = 'content'

function getLocalStorage(): string {
  return localStorage.getItem(STORAGE_NAME) || ''
}

function saveToLocalStorage(content: string) {
  localStorage.setItem(STORAGE_NAME, content)
}

const buttonClasses = 'py-1 px-2 border border-gray-400 rounded-md'

export default function Editor() {
  const [contentCache, setContentCache] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [didSave, setDidSave] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleSaveClick() {
    saveToLocalStorage(textareaRef.current?.value || '')
    setDidSave(true)
    setTimeout(() => {
      setDidSave(false)
    }, 3000)
  }

  function handleLoadClick() {
    setContentCache(getLocalStorage())
  }

  function handlePreviewClick() {
    // cache content state when switching from editor to preview
    if (!showPreview) {
      setContentCache(textareaRef.current?.value || '')
    }
    setShowPreview(!showPreview)
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Editor')}</title>
      </Head>
      <main className='flex flex-col gap-8 wrap'>
        <header className='flex items-center justify-between'>
          <h1 className='text-4xl font-bold'>Editor</h1>
          <button type='button' onClick={handlePreviewClick} className={buttonClasses}>
            Show {showPreview ? 'Editor' : 'Preview'}
          </button>
        </header>
        {showPreview ? (
          <Markdown content={contentCache} />
        ) : (
          <>
            <TextareaAutosize
              ref={textareaRef}
              defaultValue={contentCache}
              className='p-4 border border-gray-400 rounded-md outline-black dark:bg-slate-900 dark:outline-white resize-none'
              minRows={8}
            />
            <div className='flex justify-end gap-2'>
              <button type='button' onClick={handleSaveClick} className={buttonClasses}>
                {didSave ? 'Saved!' : 'Save to LocalStorage'}
              </button>
              <button type='button' onClick={handleLoadClick} className={buttonClasses}>
                Load from LocalStorage
              </button>
            </div>
          </>
        )}
      </main>
    </>
  )
}
