import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { colors } from '@/models/colors'
import Image from 'next/image'
import { ToogleIconButton } from './ToogleIconButton'

type ColorPopoverProps = {
  handleChangeColor: (color: string) => void
  isPopoverOpen: boolean
  setIsPopoverOpen: (open: boolean) => void
}

export const ColorPopover = ({
  handleChangeColor,
  isPopoverOpen,
  setIsPopoverOpen,
}: ColorPopoverProps) => {
  return (
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
  )
}
