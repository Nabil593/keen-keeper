'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";

const Navber = () => {

    const [open, setOpen] = useState(false);
    
    const pathName = usePathname()

    const link = <>
        <li><Link href="/" className={pathName === '/' ? 'bg-[#244D3F] text-white' : 'text-black'}><RiHome2Line /> Home</Link></li>
        <li><Link href="/timeline" className={pathName === '/timeline' ? 'bg-[#244D3F] text-white' : 'text-black'}><IoTimeOutline /> Timeline</Link></li>
        <li><Link href="/stats" className={pathName === '/stats' ? 'bg-[#244D3F] text-white' : 'text-black'}><ImStatsBars /> Stats</Link></li>
    </>

    return (
        <div>

            <div className="navbar bg-white shadow-sm lg:px-12 md:px-6 px-4">
                <div className="flex-1">
                    <Link href="/" className="text-black text-2xl"><h1 className="font-bold">Keen<span className="text-[#244D3F]">Keeper</span></h1></Link>
                </div>

                <div className="flex-none lg:block md:block hidden">
                    <ul className="menu menu-horizontal gap-4 text-[18px] px-1 font-medium text-black">
                        {link}
                    </ul>
                </div>

                <button onClick={() => setOpen(!open)} className="text-black text-2xl lg:hidden md:hidden block">
                    {
                        open ? <HiX /> : <HiMenu />
                    }
                </button>
            </div>

            {
                open &&
                <div className="flex flex-row lg:hidden md:hidden bg-white">
                    <ul className="menu gap-4 text-[18px] px-1 font-medium text-black ml-4">
                        {link}
                    </ul>
                </div>
            }

        </div>
    );
};

export default Navber;