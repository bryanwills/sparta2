import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index.js'

const themes = ['light', 'dark']

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {

    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-2xl bg-[#e3b151] dark:bg-zinc-700">
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-white text-[#080e18]' : ''
            } cursor-pointer rounded-2xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}