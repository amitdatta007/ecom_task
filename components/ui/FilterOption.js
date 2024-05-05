"use client"

import { FaTimes } from "react-icons/fa";
import SearchBar from "../home/SearchBar";
import { useState } from "react";

const FilterOption = ({ setIsOpen }) => {
    const [tabName, setTabName] = useState('company')
    return (
        <>
            <div className="fixed w-full max-w-80 bottom-0 p-4 flex gap-5 shadow-[0_0px_10px_rgb(0,0,0,0.1)]">
                <button className="w-full border border-black p-[10px] rounded-lg font-medium leading-7 hover:bg-primary hover:text-white transition-all duration-300 ease-out hover:border-primary">Apply</button>
                <button className="w-full border border-black p-[10px] rounded-lg font-medium leading-7 hover:bg-primary hover:text-white transition-all duration-300 ease-out hover:border-primary">Reset</button>
            </div>
            <div className="w-full h-full pb-[82px]">
                <div className="w-full h-full overflow-auto scrollbar-none px-5">
                    <div className="pt-5 pb-3 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Filter By</h2>
                        <button className="w-8 h-8 grid place-items-center" onClick={() => setIsOpen((state) => !state)}>
                            <FaTimes className="text-xl" />
                        </button>
                    </div>
                    <SearchBar />
                    <div className="flex gap-2 my-4">
                        <button
                            value='company'
                            className={`px-4 py-2 text-sm font-semibold rounded-md leading-[17px] transition-all duration-300 ease-out ${tabName === 'company' && 'bg-black text-white'}`}
                            onClick={(e) => setTabName(e.target.value)}
                        >
                            Company
                        </button>
                        <button
                            value='generic name'
                            className={`px-4 py-2 text-sm font-semibold rounded-md leading-[17px] transition-all duration-300 ease-out ${tabName === 'generic name' && 'bg-black text-white'}`}
                            onClick={(e) => setTabName(e.target.value)}
                        >
                            Generic Name
                        </button>
                    </div>
                    <div className="mt-5">
                        <div className={`w-full transition-all duration-300 ease-out delay-1000 flex flex-col gap-4 ${tabName === 'company' ? 'visible opacity-100 block' : 'invisible opacity-0 hidden'}`}>
                            <div className="flex items-center gap-2">
                                <input id='premiumlaptop' type="checkbox" className="bg-black w-4 h-4 rounded border-black" />
                                <label htmlFor="premiumlaptop" className="text-sm font-medium mt-1 leading-6">Premium Laptop</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="smartphone" type="checkbox" className="bg-black w-4 h-4 rounded border-black" />
                                <label htmlFor="smartphone" className="text-sm font-medium mt-1 leading-6">Smartphone Pro</label>
                            </div>

                        </div>
                        <div className={`w-full transition-all duration-300 ease-out delay-1000 flex flex-col gap-4 ${tabName === 'generic name' ? 'visible opacity-100 block' : 'invisible opacity-0 hidden'}`}>
                            <div className="flex items-center gap-2">
                                <input id='premiumlaptop' type="checkbox" className="bg-black w-4 h-4 rounded border-black" />
                                <label htmlFor="premiumlaptop" className="text-sm font-medium mt-1 leading-6">Premium Laptop</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="smartphone" type="checkbox" className="bg-black w-4 h-4 rounded border-black" />
                                <label htmlFor="smartphone" className="text-sm font-medium mt-1 leading-6">Smartphone Pro</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterOption;