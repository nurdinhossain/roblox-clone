import Image from "next/image";

import profile1 from '../../public/profile1.webp'
import profile2 from '../../public/profile2.webp'
import profile3 from '../../public/profile3.webp'

export default function Home() {
  const MAX_FRIENDS = 12
  const profiles = [...Array(MAX_FRIENDS).keys()].map((profile, i) => 
            <Image src={profile1} width={100} alt='Profile' key={i} className="rounded-full aspect-square object-cover mx-3" />)

  return (
    <div className='mx-7 my-10'>
      <h1 className="text-3xl font-extrabold my-4">Home</h1>

      {/* Friend list */}
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-extrabold">Connections (84)</h2>
          <a>See all</a>  
        </div>
      </div>
      
      {/* Profiles */}
      <div className="flex flex-row my-4">
        {profiles}
      </div>

    </div>
  );
}
