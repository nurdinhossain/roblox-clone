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
            <div className="flex flex-col justify-center">
                <span >Charts</span>
            </div>
            <div className="flex flex-col justify-center">
                <span >Marketplace</span>
            </div>
            <div className="flex flex-col justify-center">
                <span >Create</span>
            </div>
            <div className="flex flex-col justify-center">
                <span >Robux</span>
            </div>
            <SearchBar />
            
            {/* Profile + name */}
            <div className="flex flex-row">
                <Image 
                    src={profile}
                    width={20}
                    alt='Profile'
                />
                <div className="flex flex-col justify-center">
                    <a className="text-sm ml-1 hover:underline">wizardshield101</a>
                </div>
            </div>
            <Image src={notification} width={25} alt='Notification' />

            {/* Robux */}
            <div className="flex flex-row">
                <Image src={robux} width={20} alt='Robux' />
                <div className="flex flex-col justify-center">
                    <span className="ml-1">24</span>
                </div>
            </div>

            {/* Money */}
            <div className="flex flex-row">
                <Image src={wallet} width={20} alt='Wallet' />
                <div className="flex flex-col justify-center">
                    <span className="ml-1">$0.05</span>
                </div>
            </div>

            <Image src={settings} width={20} alt='Settings' />
        </header>
    )
}