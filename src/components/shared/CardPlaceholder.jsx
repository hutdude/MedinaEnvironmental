import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

export default function PlaceholderCard() {
    return (
        <div className="h-full relative rounded-7 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-64 rounded-t-7 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-gray-300 animate-pulse">
                {/* Placeholder for image */}
            </div>  
            <span className="absolute top-0 right-8 rounded-7 z-20 inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium w-16 h-6 animate-pulse"></span>
            <div className="p-8">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="flex justify-start items-center gap-4 py-4">
                    <FaCalendarAlt className="text-gray-300" />
                    <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
                <div className="flex justify-start items-center gap-4">
                    <IoMdPin className="text-gray-300" />
                    <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}