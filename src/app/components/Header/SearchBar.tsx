import Image from 'next/image'

export const SearchBar = () => {
  return (
    <div className='relative flex-1 max-w-[530px]'>
      <input
        type="text"
        placeholder="Pesquisar notas"
        className="border-2 border-gray-200 p-2 rounded-lg w-full pr-9 shadow-md"
      />
      <Image alt="Search Icon" height={20} width={20} src="/search.svg" 
        className='absolute top-1/2 right-3 transform -translate-y-1/2'
      />
    </div>
  )
}
