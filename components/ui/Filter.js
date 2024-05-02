"use client"

import { useState } from "react";
import { FaSlidersH } from "react-icons/fa";

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button
                className="w-10 h-10 rounded bg-primary text-white hover:bg-black transition-colors duration-300 ease-out grid place-items-center"
                onClick={() => setIsOpen((state) => !state)}
            >
                <FaSlidersH />
            </button>
            <div
                className={`fixed h-full w-full bg-[rgba(0,0,0,0.5)] top-0 left-0 z-30 transition-all duration-300 ease-out ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                onClick={() => setIsOpen((state) => !state)}
            >
            </div>
            <div className={`fixed w-full max-w-80 h-full bg-white z-50 top-0 transition-all duration-300 ease-out ${isOpen ? 'right-0': '-right-80'}`}>

            </div>
        </>
    );
};

export default Filter;