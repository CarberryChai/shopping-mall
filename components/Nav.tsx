import Link from 'next/link'
import ToggleDarkMode from './DarkMode'
import { UserButton } from '@clerk/nextjs'

export default function Nav() {
  return (
    <nav className='sticky top-0 border-b backdrop:blur-md'>
      <div className='flex items-center justify-between px-10'>
        <Link className='font-bold' href='/'>
          Shopping Mall
        </Link>
        <div className='flex gap-6 items-center'>
          <ToggleDarkMode />
          <UserButton afterSignOutUrl='/'></UserButton>
        </div>
      </div>
    </nav>
  )
}
