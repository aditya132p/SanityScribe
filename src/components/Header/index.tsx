"use client"

import Link from 'next/link'
import React from 'react'
import Input from '../Input/Index'
import ThemeButton from '../ThemeButton'
import LogoSvg from '../UI/svg/Logo'

const Header = () => {
    return (
        <>
            <header className='w-full  max-w-[1152px] mx-auto'>
                <nav className='flex  mx-auto justify-between items-center' >
                    <div className="nav-left flex justify-start">
                        <LogoSvg width={"158"} className=" text-white fill-[#141624] fill
                          dark:fill-white" />
                        {/* <image src={logo} className='w-28  h-auto' /> */}
                    </div>
                    <div className="nav-center flex items-center gap-8 text-primary-2 dark:text-white justify-between">
                        <Link className='text-base font-normal' href={"/"}>Home</Link>
                        <Link className='text-base font-normal' href={"/blog"}>Blog</Link>
                        <Link className='text-base font-normal' href={""}>Single Post</Link>
                        <Link className='text-base font-normal' href={""}>Pages</Link>
                        <Link className='text-base font-normal' href={""}>Contact</Link>

                    </div>
                    <div className="nav-right flex placeholder:text-base  items-center  bg-primary-0 rounded-lg "  >
                        <Input className='flex items-center px-3 justify-center' sx="text-primary-2 bg-transparent py-2 w-36 outline-none" />

                    </div>
                    <ThemeButton />

                </nav>
            </header>
        </>
    )
}

export default Header