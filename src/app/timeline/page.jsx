"use client";

import { useInteractions } from "@/Context/InteractionContext";
import Image from "next/image";
import call from "@/app/assets/call.png";
import text from "@/app/assets/text.png";
import video from "@/app/assets/video.png";
import { useState } from "react";

const TimelinePage = () => {

    const { interactions } = useInteractions();
    const [filterType, setFilterType] = useState("All");
    const [search, setSearch] = useState("");

    const filteredInteractions = filterType === "All" ? interactions : interactions.filter(filtered => filtered.action === filterType);

    const searchedInteractions = search
        ? filteredInteractions.filter((interact) => interact.friendName.toLowerCase().includes(search.toLowerCase()))
        : filteredInteractions;

    return (
        <div className="max-w-[1200px] mx-auto w-full my-20 space-y-8 mb-30 lg:px-12 md:px-6 px-4">

            <h2 className="lg:text-5xl md:text-4xl text-4xl font-bold">Timeline</h2>
            <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-8 justify-between">
                <div className="w-full">
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="select appearance-none bg-white border border-gray-300 rounded p-2">
                        <option value="All">All Timeline</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </select>
                </div>

                <label className="input bg-white border-gray-300">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>

            <div>
                <div className="flex flex-col gap-6">
                    {
                        searchedInteractions.map(interact => (
                            <div key={interact.id} className="bg-white shadow-sm p-4 rounded-sm flex gap-8">
                                <Image src={interact.action === 'call' ? call : interact.action === 'text' ? text : video} alt={interact.action} width={40} height={20}/>
                                <div>
                                    <p className="text-[20px] font-medium text-[#244D3F]">{interact.action.charAt(0).toUpperCase() + interact.action.slice(1)}<span className="text-gray-500 text-[16px]"> with {interact.friendName}</span></p>
                                    <p className="text-gray-500">{interact.timeDate} {interact.todayTime}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;