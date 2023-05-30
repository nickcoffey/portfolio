import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Route = {
  link: string
  name: string
}
export const ROUTES: Route[] = [
  { name: 'Posts', link: '/posts' },
  { name: 'Projects', link: '/projects' },
  { name: 'About', link: '/' }
]

type Contact = {
  text: string
  link: string
  Icon: IconType
}

export const CONTACTS: Contact[] = [
  { text: 'Follow on GitHub', link: 'https://github.com/nickcoffey', Icon: FaGithub },
  { text: 'Follow on LinkedIn', link: 'https://www.linkedin.com/in/nicholasjcoffey', Icon: FaLinkedinIn },
  { text: 'nicholasjcoffey@gmail.com', link: 'mailto:nicholasjcoffey@gmail.com', Icon: FaRegEnvelope }
]
