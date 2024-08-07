'use server'

import { Note } from "@/types/Note"

const apiBaseUrl = 'http://localhost:8080'

export const getNotes = async (): Promise<Note[]> => {
  const response = await fetch(`${apiBaseUrl}/notes`)
  return response.json()
}

export const createNote = async (note: Omit<Note, 'id'>) => {
  const response = await fetch(`${apiBaseUrl}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })

  return response.json()
}

export const updateNote = async (note: Partial<Note> & { id: string }) => {
  const response = await fetch(`${apiBaseUrl}/notes/${note.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })

  return response.json()
}

export const deleteNote = async (id: string) => {
  const response = await fetch(`${apiBaseUrl}/notes/${id}`, {
    method: 'DELETE',
  })

  return response.json()
}