import Link from 'next/link'
import React from 'react'
import Input from '../Input/Index'

const Footer = () => {
  return (
    <>
      <div className=' w-full py-16 h-auto bg-primary-0 dark:bg-[#141624]'>
        <div className=' max-w-[1152px] border-b-2 pb-8 flex justify-between mx-auto'>
          <div className='flex flex-col gap-4 w-72 items-start '>
            <span className='text-base text-primary-3 dark:text-white font-semibold'>About</span>
            <p className='text-base font-normal text-primary-2  dark:text-primary-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div>
              <span className='text-base block text-primary-3  dark:text-primary-1 font-semibold'>Email : <a href="#" className='font-normal'>info@jstemplate.net</a></span>
              <span className='text-base  text-primary-3  dark:text-primary-1 font-semibold'>Phone : <a href="#" className='font-normal'> 880 123 456 789</a></span>
            </div>
          </div>
          <div className='flex flex-col  gap-4 items-start '>
            <span className='text-base text-primary-3 dark:text-primary-0 font-semibold'>Quick link</span>
            <Link className='text-primary-2 dark:text-primary-1' href="">Home</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">About</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Blog</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Archived</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Author</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Contact</Link>
          </div>
          <div className='flex flex-col  gap-4 items-start '>
            <span className='text-base text-primary-3  dark:text-primary-0 font-semibold'>Category</span>
            <Link className='text-primary-2 dark:text-primary-1' href="">Lifestyle</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Technology</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Travel</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Business</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Economy</Link>
            <Link className='text-primary-2 dark:text-primary-1' href="">Sports</Link>
          </div>
          <div className="card w-96 h-auto px-11 flex gap-4 items-center flex-col justify-center bg-white dark:bg-[#242535] rounded-xl shadow">
            <div className="top w-full">
              <span className='font-bold text-primary-2 dark:text-primary-0 '>Weekly Newsletter</span>
              <p className='font-normal text-primary-1 dark:text-primary-' >Get blog articles and offers via email</p>
            </div>
            <div className="bottom w-full ">
              <Input className='w-full border rounded-lg flex items-center gap-3 px-3  ' sx='outline-none placeholder:text-primary-2 dark:text-primary-1 text-primary-2 place px-2 py-3 w-full'/>
              <button className=' py-3 mt-3 w-full  bg-blue-600 rounded-lg text-blue-50'>Subscribe</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Footer