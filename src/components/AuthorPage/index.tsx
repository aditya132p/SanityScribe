"use client"
import React, { useEffect, useState } from 'react'
import AuthoreCard from '../AuthorCard'
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';


export type AuthorTypes = {
    img: string;
    name: string;
    bio: string;
}
const AuthoprPage = () => {
    const { author } = useParams()
    const [data, setData] = useState<AuthorTypes>();
    const id = author;

    // Wrap the id variable in quotes
    const query = `*[_type == "author" && _id == "${id}"] {
        "img": image.asset->url,
        name,
        "bio": bio[0].children[0].text,
}`;

    useEffect(() => {
        (async () => {
            try {
                const response = await client.fetch(query);
                setData(response);
                console.log(response);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        })();
    }, [query]);

    return (
        <div>
            {data ? (
                <>
                    <AuthoreCard authorData={data} />
                    {/* You can render additional data like blogs here if needed */}
                </>
            ) : (
                <p>Loading author data...</p>
            )}
            
        </div>
    )
}

export default AuthoprPage