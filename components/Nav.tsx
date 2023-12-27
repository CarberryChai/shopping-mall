import Link from 'next/link'
import ToggleDarkMode from './DarkMode'

export default function Nav() {
  return (
    <nav className='sticky top-0 border-b backdrop:blur-md'>
      <div className='flex items-center justify-between px-10'>
        <Link className='font-bold' href='/'>
          Shopping Mall
        </Link>
        <ToggleDarkMode />
      </div>
    </nav>
  )
}
