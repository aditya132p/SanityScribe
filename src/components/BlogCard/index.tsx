
import { findDate } from '@/utils'
import React from 'react'
import { useRouter } from 'next/navigation'

const BlogCard = ({data}) => {

    console.log("aditya", data.slug.current);
    const router = useRouter()

    return (
        <>
            <div onClick={() => router.push(`/blog/${data.slug.current}`)} className='w-full flex flex-col justify-between px-4 py-3 pb-5 h-[500px] bg-white dark:bg-transparent border border-primary-0 dark:border-[#242535] shadow-lg rounded-lg'>
                <div className='w-full overflow-hidden h-1/2'>
                    <img alt='Blog image' src={data.imageUrl} className='w-full first-letter:h-full' />
                </div>
                <div className='pt-5 flex flex-col gap-3'>
                    <span className='p-2 text-blue-600 font-semibold w-fit bg-blue-50 rounded-md'>
                        {data?.categories?.title}
                        {/* Next Js */}
                    </span>
                    <h4 className='text-lg font-semibold dark:text-primary-0 text-primary-3'>{data.title}</h4>
                </div>
                <div className='flex pt-7 gap-4'>
                    <span className='flex gap-3 text-primary-1 text-base font-bold'>
                        <img className='w-8 rounded-full h-8 object-contain' src={data?.author?.img} alt="" />
                        {data?.author?.name}
                    </span>
                    <span className='text-primary-1 text-base font-bold'>{findDate(data.publishedAt)}</span>
                </div>
            </div>
        </>
    )
}

export default BlogCard