import Image from "next/image";
import { fetchUser } from "@/lib/data";

import profile1 from '../../public/profile1.webp'
import profile2 from '../../public/profile2.webp'
import profile3 from '../../public/profile3.webp'
import game from '../../public/game.jpeg'

export default async function Home() {
  const MAX_FRIENDS = 12
  const MAX_GAMES = 10
  const profiles = [...Array(MAX_FRIENDS).keys()].map((profile, i) => 
            <div className="flex flex-col text-center" key={i}>
              <Image src={profile1} width={100} alt='Profile' className="rounded-full aspect-square object-cover mx-3" />
              <a className="text-sm my-1">kayden</a>
            </div>
          )
  const games = [...Array(MAX_GAMES).keys()].map((g, i) => 
            <div className="flex flex-col justify-center items-center" key={i}>
              <Image src={game} sizes='100vw' style={{width: 250, height: '75%'}} alt='Game' className="rounded-sm aspect-square" />
              <a className="font-bold text-lg my-1">Epic Minigames</a>
            </div>
          )
  const users = await fetchUser();

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
        <h2 className="text-xl font-extrabold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-5 gap-x-3 gap-y-3">
          {games}
        </div>
      </div>

    </div>
  );
}
