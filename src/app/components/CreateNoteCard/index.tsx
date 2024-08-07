'use client'
import { createNote } from '@/app/actions/NotesApi'
import { FormEvent, useState } from 'react'
import { Card } from '../Card'
import { FavoriteToggleIcon } from '../FavoriteToggleIcon'

export const CreateNoteCard = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await createNote({
      content,
      isFavorite,
      title,
    })

    setTitle('')
    setContent('')
    setIsFavorite(false)
  }

  return (
    <Card className="sm:w-[530px] h-[100px]">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <div className="flex px-5">
            <input
              type="text"
              placeholder="Titulo..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 text-xl font-bold py-2 outline-none"
            />
            <FavoriteToggleIcon
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
            />
          </div>
          <hr />
          <div className="flex px-5">
            <textarea
              placeholder="Criar nota..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 outline-none resize-none res"
            />
          </div>
        </div>
        {title && content && (
          <button
            type="submit"
            className=" bg-emerald-400 p-2 rounded-md self-end shadow-lg"
          >
            Criar
          </button>
        )}
      </form>
    </Card>
  )
}
