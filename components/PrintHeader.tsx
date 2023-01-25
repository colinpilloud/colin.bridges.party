import clsx from 'clsx'
import { headerNavLinks } from 'data/headerNavLinks'
import NextImage from 'next/image'
import { siteMetadata } from '~/data/siteMetadata'

export function PrintHeader() {
  return (
    <header className="top-0 z-40 overflow-x-hidden bg-white/75 py-3 dark:bg-dark/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div className="umami--click--logo flex items-center justify-between">
          <div className="mr-3 flex items-center justify-center">
            <NextImage
              src="/static/images/logo.jpg"
              alt="I'm a bearded man smiling wryly at you against a lush green backdrop, wearing a black beanie and jacket with a white metal t-shirt underneath"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="printHeader block px-2 sm:px-6 sm:py-1">
              <p className="rounded text-lg font-extrabold text-gray-900 dark:text-gray-100">
                Colin Bridges
              </p>
              <p className="rounded text-lg font-extrabold text-gray-900 dark:text-gray-100">
                colin.bridges.party
              </p>
              <p className="rounded text-lg font-extrabold text-gray-900 dark:text-gray-100">
                colin@bridges.party
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
