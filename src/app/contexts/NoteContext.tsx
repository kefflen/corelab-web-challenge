import { Note } from '@/types/Note'
import { createContext, useEffect, useState } from 'react'
import { getNotes } from '../actions/NotesApi'

type noteContextType = {
  notes: Note[]
  addNote: (note: Note) => void
  updateNote: (note: Note) => void
  deleteNote: (id: string) => void
}

export const NoteContext = createContext<noteContextType>(null!)

type NoteProviderProps = {
  children: React.ReactNode
}

export const NoteProvider = ({ children }: NoteProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    getNotes().then((notes) => {
      setNotes(notes)
    })
  }, [])

  const addNote = (note: Note) => {
    setNotes((prev) => [note, ...prev])
  }

  const updateNote = (note: Note) => {
    setNotes((prev) => {
      const index = prev.findIndex((n) => n.id === note.id)
      if (index === -1) {
        return prev
      }
      const newNotes = [...prev]
      newNotes[index] = note
      return newNotes
    })
  }

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
