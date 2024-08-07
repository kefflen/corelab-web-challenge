import { Note } from '@/types/Note'
import { useEffect } from 'react'
import { getNotes } from './actions/NotesApi'
import { CreateNoteCard } from './components/CreateNoteCard'
import { NoteCard } from './components/NoteCard'

const NotesMock: Note[] = [
  {
    id: '1',
    title: 'Note 1',
    content: 'Content 1',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Note 2',
    content: 'Content 2',
    isFavorite: false,
    color: '#BAE2FF',
  },
  {
    id: '3',
    title: 'Note 3',
    content: 'Content 3',
    isFavorite: false,
    color: '#ECA1FF',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-10 px-4 pb-20">
      <section className="self-center">
        <CreateNoteCard />
      </section>
      <section>
        <h1 className="text-xl font-semibold mb-2">Favoritos</h1>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {NotesMock.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-xl font-semibold mb-2">Outros</h1>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {NotesMock.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>
    </main>
  )
}
