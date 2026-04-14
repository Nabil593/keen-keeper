import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FiFacebook, FiInstagram} from 'react-icons/fi';

const Footer = () => {
    return (
        <div>
            <footer className="footer w-full footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
                <aside>
                    <h1 className="text-white lg:text-6xl md:text-5xl text-3xl font-bold mb-2">Keen<span className="text-white font-medium">Keeper</span></h1>
                    <p className=" text-white opacity-80">
                       Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </aside>
                <nav>
                <p className='text-[20px] font-bold mb-2.5'>Social Links</p>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.instagram.com" target="_blank" className='bg-white p-2.5 text-black rounded-full font-semibold text-[20px]'>
                            <FiInstagram />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" className='bg-white p-2.5 text-black rounded-full font-semibold text-[20px]'>
                            <FiFacebook />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" className='bg-white p-2.5 text-black rounded-full font-semibold text-[20px]'>
                            <FaXTwitter />
                        </a>
                    </div>
                </nav>

                <hr className='w-full text-gray-600'></hr>

                <div className='w-full flex items-center justify-between gap-8 lg:flex-row md:flex-row flex-col'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <div className='flex gap-6'>
                        <a href="">Privacy Policy </a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;