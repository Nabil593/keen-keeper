"use client";

import { useInteractions } from "@/Context/InteractionContext";
import Image from "next/image";
import call from "@/app/assets/call.png";
import text from "@/app/assets/text.png";
import video from "@/app/assets/video.png";

const TimelinePage = () => {

    const { interactions } = useInteractions();

    return (
        <div className="max-w-[1300px] mx-auto w-full my-20 space-y-8">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Timeline</h2>
                <select defaultValue="Fillter Timeline" className="select appearance-none bg-white">
                    <option disabled={true} >Fillter Timeline</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
            </div>

            <div>
                <div className="flex flex-col gap-6">
                    {
                        interactions.map(interact => (
                            <div key={interact.id} className="bg-white shadow-lg p-4 rounded-sm flex gap-8">
                                <Image src={interact.action === 'call' ? call : interact.action === 'text' ? text : video} alt={interact.action} width={40} height={40}/>
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