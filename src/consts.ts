import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import type { IconType } from 'react-icons'

export const ROUTES = ['Posts', 'Projects', 'About']

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
