import Modal from '@/components/ui/modal'

export default function Home() {
  return (
    <main className='flex gap-5'>
      <Modal title='TEst' description='This is a TEst' isOpen>
        hello world
      </Modal>
    </main>
  )
}
