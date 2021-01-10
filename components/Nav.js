import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function NavItem({href, children}) {
  return <Link href={ href }>
    <a className="py-2 px-3 text-gray-900 dark:text-gray-100 transition-opacity hover:opacity-70">
      { children }
    </a>
  </Link>
}

function NavHomeItem() {
  return <Link href="/">
    <a className="pr-3 sm:p-4 transition-opacity hover:opacity-70">
      <span className="sr-only">Home</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"
           className="rounded fill-current text-white dark:text-black bg-black dark:bg-gray-100 p-2 h-9 w-9">
        < path d="M39.23 3.31L40.72 0H24L0 58h58L39.08 12.34a11.34 11.34 0 01.15-9.03zm-5.46 11.9L49.72 52H19z"/>
      </svg>
    </a>
  </Link>
}

export default function Nav() {
  const [ mounted, setMounted ] = useState(false);
  const {setTheme, resolvedTheme} = useTheme();
  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    if (checked) setTheme("dark");
    else setTheme("light");
  };
  const isDarkMode = resolvedTheme === "dark";

  return (
    <nav
      className="flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-4 md:mb-8 mx-auto">
      <div className="flex flex-row justify-center items-center sm:space-x-4 space-x-2">
        <NavHomeItem/>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/about">About</NavItem>
      </div>
      { mounted && (
        <DarkModeSwitch
          checked={ isDarkMode }
          onChange={ toggleDarkMode }
          className={ "h-5 w-5" }
        />
      ) }
    </nav>
  )
}
