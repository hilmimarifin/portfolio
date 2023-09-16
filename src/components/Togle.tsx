"use client"
import React from 'react'

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

export default function TogleDark({ className }: { className: string }) {
    const { theme, setTheme } = useTheme();
    const [isDarkmode, setIsDarkmode] = useState(theme === 'dark' ? true : false);

    const darkIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
    );

    const lightIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
    );

    const toggleTheme = () => {
        setIsDarkmode((prevIsDarkmode) => !prevIsDarkmode);
        theme == "dark" ? setTheme('light') : setTheme("dark")
    };

    const switchTheme = () => {
        const switchToggle = document.querySelector('#switch-toggle');

        if (isDarkmode) {
            switchToggle?.classList.remove('bg-yellow-500', '-translate-x-2');
            switchToggle?.classList.add('bg-gray-700', 'translate-x-full');

        } else {
            switchToggle?.classList.add('bg-yellow-500', '-translate-x-2');
            switchToggle?.classList.remove('bg-gray-700', 'translate-x-full');

        }
    };

    useEffect(() => {
        switchTheme();
    }, [isDarkmode]);

    return (
        <div className={className}>
            <button
                className="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
                onClick={toggleTheme}
            >
                <div
                    id="switch-toggle"
                    className="w-6 h-6 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
                >
                    {isDarkmode ? darkIcon : lightIcon}
                </div>
            </button>
        </div>
    );
}
