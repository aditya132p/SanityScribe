"use client"
import { bannerImg } from '@/constants/Image'
import Image from 'next/image'
import React from 'react'
import BannerCard from './BannerCard'

const Banner = () => {
  return (
    <>
    <div className='relative pb-28'>
    <Image width={200} alt='banner' height={100} src={bannerImg}  className='w-full'/>
    <div className='absolute bottom-[40px] left-5'>
        <BannerCard/>
    </div>
    </div>
    </>
  )
}

export default Banner