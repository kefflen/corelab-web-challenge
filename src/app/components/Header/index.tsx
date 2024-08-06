import Image from 'next/image'
import { SearchBar } from './SearchBar'

export const Header = () => {
  return (
    <header className="bg-white px-6 py-4 flex items-center gap-4 sm:gap-7">
      <div className="flex items-center gap-3 sm:gap-4">
        <Image alt="CoreNotes Logo" height={30} width={30} src="/logo.png" />
        <h1 className="text-[#455A64] text-xs sm:text-sm">CoreNotes</h1>
      </div>
      <div className='flex-1'>
        <SearchBar />
      </div>
      <Image alt="x" 
        src={'/x.svg'}
        width={15}
        height={15}
        className='justify-self-end'
      />
    </header>
  )
}
