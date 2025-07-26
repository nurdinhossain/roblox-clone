import Image from 'next/image'
import magnifyingGlass from '../../public/magnifying_glass.svg'

export default function SearchBar() {
    return (
        <div className="flex flex-row border rounded-lg p-1">
            <Image 
                src={magnifyingGlass}
                width={20}
                alt='Magnifying glass'
            />
            <input className="ml-2" type="text" placeholder="Search" />
        </div>
    )
}