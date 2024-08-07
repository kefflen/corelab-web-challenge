import { Note } from '@/types/Note'
import { NoteCard } from '../NoteCard'

type NotesGridProps = {
  notes: Note[]
}

export const NotesGrid = ({ notes }: NotesGridProps) => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}
