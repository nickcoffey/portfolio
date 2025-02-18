import { FaLinkedinIn, FaGithub, FaRegEnvelope, FaCoffee } from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Route = {
  link: string
  name: string
}
export const ROUTES: Route[] = [
  { name: 'About', link: '/' },
  { name: 'Posts', link: '/posts' },
  { name: 'Projects', link: '/projects' },
]

type Contact = {
  text: string
  link: string
  Icon: IconType
}

export const CONTACTS: Contact[] = [
  { text: 'Follow on GitHub', link: 'https://github.com/nickcoffey', Icon: FaGithub },
  { text: 'Follow on LinkedIn', link: 'https://www.linkedin.com/in/nicholasjcoffey', Icon: FaLinkedinIn },
  { text: 'nicholasjcoffey@gmail.com', link: 'mailto:nicholasjcoffey@gmail.com', Icon: FaRegEnvelope },
  { text: 'Buy me a coffee', link: 'https://buymeacoffee.com/nickcoffey', Icon: FaCoffee }
]
