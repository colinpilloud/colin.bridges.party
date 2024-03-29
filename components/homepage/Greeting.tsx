import clsx from 'clsx'

export function Greeting() {
  let className = clsx(
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:to-purple-400 dark:from-primary-600',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )
  return (
    <div className={className}>
      Hi there!<i className="twa twa-party-popper"></i>
    </div>
  )
}
