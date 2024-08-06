'use client'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { Card } from '../Card'

export const CreateNoteCard = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="sm:w-[530px] h-[100px]">
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault()
          console.log({ title, content, isFavorite })
        }}
      >
        <div className="flex px-5">
          <input
            type="text"
            placeholder="Titulo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 text-xl font-bold py-2 outline-none"
          />
          <button type="button" onClick={() => setIsFavorite(!isFavorite)}>
            <Image
              alt="favorite icon"
              src="/star.svg"
              height={20}
              width={20}
              className={`cursor-pointer ${
                isFavorite ? 'bg-yellow-500' : ''
              }`}
            />
          </button>
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
      </form>
    </Card>
  )
}
