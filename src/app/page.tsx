'use client'
import { Note } from '@/types/Note'
import { useEffect, useState } from 'react'
import { getNotes } from './actions/NotesApi'
import { CreateNoteCard } from './components/CreateNoteCard'
import { NoteCard } from './components/NoteCard'

export default function Home() {
  const [othersNotes, setOthersNotes] = useState<Note[]>([])
  const [favoriteNotes, setFavoriteNotes] = useState<Note[]>([])

  useEffect(() => {
    getNotes().then((notes) => {
      let favoriteNotes: Note[] = []
      let othersNotes: Note[] = []

      for (const note of notes) {
        if (note.isFavorite) {
          favoriteNotes.push(note)
        } else {
          othersNotes.push(note)
        }
      }
      setFavoriteNotes(favoriteNotes)
      setOthersNotes(othersNotes)
    })
  }, [])

  return (
    <main className="flex flex-col gap-10 px-4 pb-20">
      <section className="self-center">
        <CreateNoteCard />
      </section>
      <section>
        <h1 className="text-xl font-semibold mb-2">Favoritos</h1>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {favoriteNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-xl font-semibold mb-2">Outros</h1>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {othersNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>
    </main>
  )
}
