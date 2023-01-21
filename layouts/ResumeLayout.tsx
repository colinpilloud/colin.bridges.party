import { PageSeo } from 'components/SEO'
import { ScrollTopButton } from '~/components/ScrollTopButton'
import { siteMetadata } from '~/data/siteMetadata'
import type { ResumeLayoutProps } from '~/types'

export function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <>
      <PageSeo
        title={`${siteMetadata.title} — Résumé`}
        description={`${siteMetadata.title} — Résumé`}
      />
      <ScrollTopButton />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:space-y-0">
          <div className="prose prose-lg max-w-none pt-8 pb-8 dark:prose-dark">{children}</div>
        </div>
      </div>
    </>
  )
}

export default ResumeLayout
