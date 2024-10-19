"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { findDate } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PortableText } from '@portabletext/react';
import { useRouter } from "next/navigation";

// interface Article {
//     title: string;
//     slug: string;
//     publishedAt: string;
//     tags: { title: string };
//     imageUrl: string;
//     author: {
//         name: string,
//         img: string
//     };
// }

export default function Page({ params }: { params: { slug: string } }) {
    const [blog, setBlog] = useState<any>(null);
    const router = useRouter()

    const getSingleBlog = `*[slug.current == $slug]{
      title,
      "slug":slug.current,
      publishedAt,
      "tags": categories[0]->{title},
      body,
      mainImage,
      author->{name,_id, "img": image.asset->url}
    }`;

    const singleData = async () => {
        try {
            const response = await client.fetch(getSingleBlog, { slug: params.slug });
            setBlog(response[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.slug) {
            singleData();
        }
    }, [params.slug]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    const customComponents = {
        block: {
            normal: ({ children }: any) => <p className="my-4">{children}</p>,
            h1: ({ children }: any) => <h1 className="text-4xl font-bold">{children}</h1>,
            h2: ({ children }: any) => <h2 className="text-3xl font-semibold">{children}</h2>,
        },
        marks: {
            link: ({ value, children }: any) => (
                <a href={value.href} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            ),
        },
    };


    return (
        <div className="w-full cursor-pointer h-full min-h-screen">
            <div className="max-w-4xl mt-20 dark:text-primary-0 mx-auto w-full">
                <div className="flex flex-col gap-8 w-full">
                    <span className="bg-blue-600 text-white px-5 py-2 w-fit font-semibold rounded-xl">
                        {blog.tags?.title || "No Category"}
                    </span>
                    <h1 className="text-primary-2 dark:text-primary-0 font-semibold text-4xl">{blog?.title}</h1>

                    <div className="flex pt-7 gap-4">
                        <span onClick={() => router.push(`/author/${blog?.author?._id}`)} className="flex gap-3 text-blue-400 text-base font-bold">
                            {blog.author?.img && (
                                <Image
                                    className="w-8 rounded-full h-8 object-contain"
                                    src={blog.author.img}
                                    alt={blog.author.name}
                                    width={32}
                                    height={32}
                                />
                            )}
                            {blog.author?.name}
                        </span>
                        <span className="text-primary-1 text-base font-bold">
                            {blog.publishedAt ? findDate(blog.publishedAt) : "Unknown Date"}
                        </span>
                    </div>
                </div>
                <div className="flex py-8 justify-center">
                    {blog.mainImage && (
                        <Image
                            alt={blog.title}
                            src={urlFor(blog.mainImage).url()}
                            width={800}
                            className="w-full h-auto object-cover"
                            height={40}
                        />
                    )}
                </div>
                <div className="w-full py-8 text-primary-3 dark:text-primary-0">
                    <PortableText value={blog.body} components={customComponents} />

                </div>
            </div>
        </div>
    );
}
