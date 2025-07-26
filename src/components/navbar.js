import SearchBar from "./searchbar"
import Image from "next/image"

import robloxLogo from '../../public/roblox_logo.svg'
import profile from '../../public/profile.svg'
import notification from '../../public/notification.svg'
import robux from '../../public/robux.svg'
import wallet from '../../public/wallet.svg'
import settings from '../../public/settings.svg'

export default function NavBar() {
    return (
        <header className="flex flex-row justify-around bg-gray-100 py-2">
            <Image src={robloxLogo} width={25} alt='Roblox Logo' />
            <span className="py-1">Charts</span>
            <span className="py-1">Marketplace</span>
            <span className="py-1">Create</span>
            <span className="py-1">Robux</span>
            <SearchBar />
            
            {/* Profile + name */}
            <div className="flex flex-row py-1">
                <Image 
                    src={profile}
                    width={20}
                    alt='Profile'
                />
                <a className="text-sm ml-1 py-1 hover:underline">wizardshield101</a>
            </div>
            <Image src={notification} width={25} alt='Notification' />

            {/* Robux */}
            <div className="flex flex-row py-1">
                <Image src={robux} width={20} alt='Robux' />
                <span className="ml-1 py-1">24</span>
            </div>

            {/* Money */}
            <div className="flex flex-row py-1">
                <Image src={wallet} width={20} alt='Wallet' />
                <span className="ml-1 py-1">$0.05</span>
            </div>

            <Image src={settings} width={20} alt='Settings' />
        </header>
    )
}