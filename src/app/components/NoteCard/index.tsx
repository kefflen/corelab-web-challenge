'use client'

import { updateNote } from '@/app/actions/NotesApi'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { colors } from '@/models/colors'
import { Note } from '@/types/Note'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { ToogleIconButton } from './_components/ToogleIconButton'

type NoteCardProps = {
  note: Note
}

export const NoteCard = ({ note }: NoteCardProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingNote, setEditingNote] = useState(note)

  useEffect(() => {
    setEditingNote(note)
  }, [note])

  const handleIsEditModeChange = () => {
    setIsEditMode((prev) => {
      if (prev) {
        updateNote(editingNote)
      }
      return !prev
    })
  }

  const handleChangeColor = (color: string) => {
    setEditingNote((prev) => ({ ...prev, color }))
    updateNote({
      id: editingNote.id,
      color,
    })
  }

  const changeIsFavorite = (isFavorite: boolean) => {
    setEditingNote((prev) => ({ ...prev, isFavorite }))
    updateNote({
      id: editingNote.id,
      isFavorite,
    })
  }

  return (
    <Card
      className={cn('h-[440px] rounded-2xl flex flex-col')}
      styles={editingNote.color ? { backgroundColor: editingNote.color } : {}}
    >
      <div className="flex px-5">
        <input
          value={editingNote.title}
          onChange={(e) =>
            setEditingNote((prev) => ({ ...prev, title: e.target.value }))
          }
          readOnly={!isEditMode}
          className="text-xl font-bold py-2 flex-1 outline-none bg-transparent"
        />
        <button onClick={() => changeIsFavorite(!editingNote.isFavorite)}>
          <Image
            alt="favorite icon"
            src="/star.svg"
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </button>
      </div>
      <hr
        className={cn('border-background', editingNote.color && 'border-white')}
      />
      <textarea
        value={editingNote.content}
        onChange={(e) =>
          setEditingNote((prev) => ({ ...prev, content: e.target.value }))
        }
        readOnly={!isEditMode}
        className="flex-1 p-5 outline-none bg-transparent resize-none"
      />
      <div className="px-5 py-4 flex justify-between w-full">
        <div className="flex gap-4">
          <ToogleIconButton
            isActive={isEditMode}
            onClick={handleIsEditModeChange}
          >
            <Image
              alt="edit icon"
              src="/edit.svg"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </ToogleIconButton>
          <Popover
            onOpenChange={(isOpen) => setIsPopoverOpen(isOpen)}
            open={isPopoverOpen}
          >
            <PopoverTrigger>
              <ToogleIconButton isActive={isPopoverOpen}>
                <Image
                  alt="tint icon"
                  src="/tint.svg"
                  height={20}
                  width={20}
                  className="cursor-pointer"
                />
              </ToogleIconButton>
            </PopoverTrigger>
            <PopoverContent align="start" className="flex gap-1">
              {Object.entries(colors).map(([color, value]) => (
                <button
                  key={value}
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: value }}
                  onClick={() => handleChangeColor(value)}
                ></button>
              ))}
            </PopoverContent>
          </Popover>
        </div>
        <Image
          alt="delete icon"
          src="/x.svg"
          height={20}
          width={20}
          className="cursor-pointer"
        />
      </div>
    </Card>
  )
}
