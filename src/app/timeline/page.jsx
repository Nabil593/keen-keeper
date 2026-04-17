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

    const filteredInteractions = filterType === "All" ? interactions : interactions.filter(filtered => filtered.action === filterType);


    return (
        <div className="max-w-[1300px] mx-auto w-full my-20 space-y-8">

            <h2 className="text-5xl font-bold">Timeline</h2>
            <div className="flex lg:flex-row md:flex-row flex-col gap-8 justify-between">
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
                    <input type="search" required placeholder="Search" />
                </label>
            </div>

            <div>
                <div className="flex flex-col gap-6">
                    {
                        filteredInteractions.map(interact => (
                            <div key={interact.id} className="bg-white shadow-lg p-4 rounded-sm flex gap-8">
                                <Image src={interact.action === 'call' ? call : interact.action === 'text' ? text : video} alt={interact.action} />
                                <div>
                                    <p>{interact.friendName}</p>
                                    <p>{interact.timeDate}</p>
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