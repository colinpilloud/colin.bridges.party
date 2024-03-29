import { siteMetadata } from '~/data/siteMetadata'
import { BuiltWith } from './BuiltWith'

export function Footer() {
  return (
    <footer>
      <div className="mt-16 mb-8 items-center justify-between space-y-4 print:hidden md:mb-10 md:flex md:space-y-0">
        <BuiltWith />
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>{siteMetadata.footerTitle}</span>
        </div>
      </div>
    </footer>
  )
}
