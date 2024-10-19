import { avtarImg } from '@/constants/Image'
import Image from 'next/image'
import React from 'react'

const BannerCard = () => {
    return (
        <div className='px-7 py-9 w-[500px] shadow-lg bg-white dark:bg-[#181A2A] rounded-2xl ' >
            <div>
                <span className='px-2 rounded-lg py-3 font-medium  bg-blue-500 text-white text-sm'>Technology</span>
                <h2 className='text-4xl pt-7 text-primary-3 dark:text-primary-0 font-bold'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
            </div>
            <div className='flex pt-7 gap-4'>
                <span className='flex gap-3 text-primary-1 dark:text-primary-0 text-base font-bold'>
                <Image width={23} height={23} src={avtarImg} alt="" />
                 Aditya pawar
              </span>
                <span className='text-primary-1 dark:text-primary-0 text-base font-bold'> August 20, 2022</span>
            </div>
        </div>
    )
}

export default BannerCard