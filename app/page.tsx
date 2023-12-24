import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex gap-5'>
      hello world!
      <Link href='/card'>Card</Link>
    </main>
  )
}
