import Image from "next/image";

import profile1 from '../../public/profile1.webp'
import profile2 from '../../public/profile2.webp'
import profile3 from '../../public/profile3.webp'
import game from '../../public/game.jpeg'

export default function Home() {
  const MAX_FRIENDS = 12
  const MAX_GAMES = 5
  const profiles = [...Array(MAX_FRIENDS).keys()].map((profile, i) => 
            <div className="flex flex-col text-center" key={i}>
              <Image src={profile1} width={100} alt='Profile' className="rounded-full aspect-square object-cover mx-3" />
              <a className="text-sm my-1">kayden</a>
            </div>
          )
  const games = [...Array(MAX_GAMES).keys()].map((g, i) => 
            <div className="flex flex-col my-2" key={i}>
              <Image src={game} sizes='100vw' style={{width: 250, height: '50%'}} alt='Game' className="rounded-sm aspect-square mr-4" />
              <a className="font-bold text-lg my-1">Epic Minigames</a>
            </div>
          )

  return (
    <div className='mx-7 my-10'>
      <h1 className="text-3xl font-extrabold my-4">Home</h1>

      {/* Friend list */}
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-extrabold">Connections (84)</h2>
        <a>See all</a>  
      </div>
      
      {/* Profiles */}
      <div className="flex flex-row my-8">
        {profiles}
      </div>

      {/* Recommended games */}
      <div>
        <h2 className="text-xl font-extrabold">Recommended for you</h2>
        <div className="flex flex-row">
          {games}
        </div>
      </div>

    </div>
  );
}
