import { siteMetadata } from '~/data/siteMetadata'
import { Link } from '../Link'
import { Twemoji } from '../Twemoji'

export function BlogLinks() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/about" className="hover:underline">
        <Twemoji emoji="microscope" />
        <span className="umami--click--home-link-about ml-3">Learn more!</span>
      </Link>
      <Link href="/blog" className="hover:underline">
        <Twemoji emoji="memo" />
        <span className="umami--click--home-link-blog ml-3">Read my blog!</span>
      </Link>
      <Link href="/resume" className="hover:underline">
        <Twemoji emoji="briefcase" />
        <span className="umami--click--home-link-resume ml-3">Peep the résumé!</span>
      </Link>
    </div>
  )
}
