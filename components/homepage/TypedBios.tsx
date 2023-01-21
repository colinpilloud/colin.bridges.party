import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 35,
      backSpeed: 10,
      loop: true,
      backDelay: 1200,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I recently got married and changed my name! <Twemoji emoji="two-hearts" />
        </li>
        <li>I like functional programming.</li>
        <li>
          I love both death metal and doom metal <Twemoji emoji="skull" />
          <Twemoji emoji="skull" />
        </li>
        <li>
          I have three cats and one dog
          <span className="ml-1">
            <Twemoji emoji="cat" />
            <Twemoji emoji="dog" />
          </span>
        </li>
        <li>I'm passionate about CI/CD and application telemetry.</li>
        <li>
          I love watching sports! <Twemoji emoji="football" />
          <Twemoji emoji="basketball" />
        </li>
        <li>
          I made the theme dark by default on purpose <Twemoji emoji="smiling-face-with-horns" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
