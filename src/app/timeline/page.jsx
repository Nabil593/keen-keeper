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
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Timeline</h2>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="select appearance-none bg-white border border-gray-300 rounded p-2">
                    <option value="All">All Timeline</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
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