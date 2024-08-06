import { Card } from './components/Card'
import { CreateNoteCard } from './components/CreateNoteCard'

export default function Home() {
  return (
    <main className='flex flex-col'>
      <section className='self-center'>
        <CreateNoteCard />
      </section>
    </main>
  )
}
