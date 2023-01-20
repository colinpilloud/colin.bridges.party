import { Twemoji } from '~/components/Twemoji'
import { siteMetadata } from '~/data/siteMetadata'

export function Heading() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">{siteMetadata.fullName}</span> - a backend{' '}
      <span className="font-medium">Software Engineer</span> in{' '}
      <span className="font-medium">Portland, OR</span>
      <span className="absolute ml-2 inline-flex pt-[3px]">
        <Twemoji emoji="cloud-rain-sun" />
      </span>
    </h1>
  )
}
