"use client"
import React, { useEffect, useState } from 'react'
// import BannerCard from '../Banner/BannerCard'
import BlogCard from '../BlogCard'
import { client } from '@/sanity/lib/client'

const LatestPost = ({ className }: { className: string, }) => {

    const [data, setData] = useState([])
    const blogData = async () => {
        try {
            const query = `*[_type == "post"] | order(_createdAt){
     title,
     slug,
     publishedAt,
     body,
     categories[0]->{title},
     "imageUrl":mainImage.asset->url,
     author->{name , "img":image.asset->url}
   }`;
            const response = await client.fetch(query);

            setData(response)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        blogData()
    }, [])
    
    return (
        <>
            <div className={className}>
                <h1 className='text-3xl font-bold text-primary-3'>Latest Post</h1>
                <div className=' grid grid-cols-3 justify-center gap-5 py-5'>
                    {data && data.map((bgdata, idx) => <BlogCard key={idx} data={bgdata} />)
                    }
                </div>
            </div>
        </>
    )
}




export default LatestPost