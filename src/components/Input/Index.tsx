"use client";

import { client } from '@/sanity/lib/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Input = ({ sx, className }: { sx: string, className: string }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);


    const query = `*[_type == "post" && title match $title]{
      title,
      "slug": slug.current,
      publishedAt
    }`;

    const fetchData = async (searchTerm: string) => {
        if (!searchTerm) {
            setResults([]);
            return;
        }
        try {
            const response = await client.fetch(query, { title: `*${searchTerm}*` }); // Pass the dynamic title as a parameter
            setResults(response);
        } catch (error) {
            console.error('error in search', error);
        }
    };


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchData(inputValue);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    return (
        <div className={`relative ${className}`}>

            <input
                type='text'
                className={sx}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder='Search'
            />
            <Search size={16} className='absolute right-2 top-1/2 transform -translate-y-1/2' color='#52525B' />

            {results.length > 0 && (
                <div className='absolute z-30 top-8 flex gap-1 flex-col bg-white w-full h-auto max-h-[160px] overflow-auto border border-gray-300 shadow-lg'>
                    {results.map((post) => (
                        <Link
                            key={post.slug}
                            className='text-primary-2 border-b py-1 px-2 hover:bg-gray-100'
                            href={`/blog/${post.slug}`}
                        >
                            {post.title}
                        </Link>
                    ))}
                </div>
            ) }
        </div>
    );
};

export default Input;
