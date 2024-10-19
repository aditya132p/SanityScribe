"use client"
import React from 'react'
import { SunIcon } from "@heroicons/react/24/outline";
import { BsMoonStars } from "react-icons/bs"
import { useTheme } from 'next-themes';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    console.log("themememem", theme);

    return (
        <div className="h-9 w-9 flex justify-center rounded-full md:p-0 ml-2 bg-gray-800">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <SunIcon className="h-8 w-8 text-orange-400" />
                ) : (
                    <BsMoonStars className="h-6 w-6 rounded-full text-gray-100" />
                )}
            </button>
        </div>
    )
}

export default ThemeButton