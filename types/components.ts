import type { ImageProps as NextImageProps } from 'next/image'
import type React from 'react'
import type { SocialIconsMap } from '~/components/SocialIcon'
import type { projectsData } from '~/data/projectsData'
import type { MdxFrontMatter, ReadingTime } from './mdx'

export interface PageTitleProps {
  children: React.ReactNode
}

export interface ImageLightBoxProps extends Pick<NextImageProps, 'src'> {
  closeLightbox: () => void
}

export interface SocialIconProps {
  name: keyof typeof SocialIconsMap
  href: string
}

export interface ImageProps extends NextImageProps {
  shouldOpenLightbox?: boolean
}

export type ProjectDataType = (typeof projectsData)[0]

export interface ProjectCardProps {
  project: ProjectDataType
}

export type TwemojiProps = {
  emoji: string
  size?: string
  className?: string
}

export interface UnsplashPhotoProps {
  photoURL: string
  author: string
}

export interface BlogHeaderProps {
  title: string
  date: string
  readingTime: ReadingTime
}

export interface BlogMetaProps {
  date: string
  slug: string
  readingTime: ReadingTime
}
