import { siteMetadata } from '~/data/siteMetadata'
import { Link } from '../Link'
import { Twemoji } from '../Twemoji'

export function BlogLinks() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/blog" className="hover:underline">
        <Twemoji emoji="memo" />
        <span className="umami--click--home-link-blog ml-3">My writings</span>
      </Link>
      <Link href="/about" className="hover:underline">
        <Twemoji emoji="microscope" />
        <span className="umami--click--home-link-about ml-3">More about me and myself</span>
      </Link>
      <Link href="/resume" className="hover:underline">
        <Twemoji emoji="briefcase" />
        <span className="umami--click--home-link-resume ml-3">My career</span>
      </Link>
    </div>
  )
}
