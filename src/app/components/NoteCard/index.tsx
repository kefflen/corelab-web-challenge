import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { colors } from '@/models/colors'
import { Note } from '@/types/Note'
import Image from 'next/image'
import { Card } from '../Card'

type NoteCardProps = {
  note: Note
}

export const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <Card
      className={cn('h-[440px] rounded-2xl flex flex-col')}
      styles={note.color ? { backgroundColor: note.color } : {}}
    >
      <div className="flex px-5">
        <h2 className="text-xl font-bold py-2 flex-1">{note.title}</h2>
        <Image
          alt="favorite icon"
          src="/star.svg"
          height={20}
          width={20}
          className="cursor-pointer"
        />
      </div>
      <hr className={cn('border-background', note.color && 'border-white')} />
      <div className="px-5 py-2 flex-1">{note.content}</div>
      <div className="px-5 py-4 flex justify-between w-full">
        <div className="flex gap-4">
          <Image
            alt="edit icon"
            src="/edit.svg"
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Popover>
            <PopoverTrigger>
              <Image
                alt="tint icon"
                src="/tint.svg"
                height={20}
                width={20}
                className="cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent align="start" className="flex gap-1">
              {Object.entries(colors).map(([color, value]) => (
                <div
                  key={value}
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: value }}
                ></div>
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
