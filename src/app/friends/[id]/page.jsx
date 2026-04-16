"use client";

import { useInteractions } from "@/Context/InteractionContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { PiArchiveBold, PiBellSimpleZBold, PiVideoCameraBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";


const SingleCard = () => {
    
    const { addInteraction } = useInteractions();

    const param = useParams();

    const [singleFriend, setSingleFriend] = useState(null);


    useEffect(() => {
        const featchFriends = async () => {
            const res = await fetch("/Data/friends.json")
            const data = await res.json();

            setSingleFriend(data.find(f => f.id.toString() === param.id));
        };
        featchFriends();
    }, [param.id])

    if (!singleFriend) return <span className="loading loading-spinner loading-xl"></span>;

    // Status color logic
    const statusColor =
        singleFriend.status === "on-track" ? "badge-success" :
            singleFriend.status === "overdue" ? "badge-error" : "badge-warning";



    return (
        <div className="max-w-[1300px] mx-auto w-full my-20 flex lg:flex-row flex-col gap-7">
            <div className="w-full">
                <div className=" bg-white w-full shadow-xl hover:shadow-2xl transition-all border border-gray-100 mb-2">
                    <div className="flex flex-col items-center pt-8">
                        <figure className="rounded-full p-1">
                            <Image
                                src={singleFriend.picture}
                                alt={singleFriend.name}
                                width={100}
                                height={100}
                                className="rounded-full object-cover"
                            />
                        </figure>
                    </div>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-bold">
                            {singleFriend.name}
                        </h2>

                        <div className={`badge ${statusColor} text-xs text-white uppercase`}>
                            {singleFriend.status}
                        </div>

                        <div className="card-actions justify-center">
                            {singleFriend?.tags?.map((tag, index) => (
                                <div key={index} className="badge border-none bg-[#CBFADB] text-[#244D3F] font-medium">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <p>{singleFriend.bio}</p>

                        <p>{singleFriend.email}</p>
                    </div>
                </div>

                <div className="h-full flex flex-col gap-2">
                    <button className="btn"><PiBellSimpleZBold /> Snooze 2 weeks</button>
                    <button className="btn"><PiArchiveBold /> Archive</button>
                    <button className="btn"><RiDeleteBinLine /> Delete</button>
                </div>
            </div>


            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex lg:flex-row md:flex-row flex-col gap-6">
                    <div className="w-full bg-white shadow-lg p-8 text-center rounded-[8px]">
                        <h2 className="text-3xl font-semibold mb-2">{singleFriend.days_since_contact}</h2>
                        <p className="text-gray-700">Days Since Contact</p>
                    </div>

                    <div className="w-full bg-white shadow-lg p-8 text-center rounded-[8px]">
                        <h2 className="text-3xl font-semibold mb-2">{singleFriend.goal}</h2>
                        <p className="text-gray-700">Goal (Days)</p>
                    </div>

                    <div className="w-full bg-white shadow-lg p-8 text-center rounded-[8px]">
                        <h2 className="text-3xl font-semibold mb-2">{singleFriend.next_due_date}</h2>
                        <p className="text-gray-700">Next Due</p>
                    </div>
                </div>

                <div className="w-full bg-white shadow-lg p-8 rounded-[8px] space-y-2">
                    <div className="flex justify-between">
                        <p>Relationship Goal</p>
                        <button className="btn btn-primary">Edit</button>
                    </div>
                    <p>Connect every 30 days</p>
                </div>

                <div className="w-full bg-white shadow-lg p-8 rounded-[8px] space-y-4">
                    <p>Quick Check In</p>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6">
                        <button onClick={() => addInteraction(singleFriend, "call")} className="w-full bg-gray-200 shadow-sm px-8 py-3 text-center rounded-[8px] cursor-pointer hover:transform hover:scale-105 transition-transform">
                            <LuPhoneCall />
                            <p className="text-gray-700">Call</p>
                        </button>

                        <button onClick={() => addInteraction(singleFriend, "text")} className="w-full bg-gray-200 shadow-sm px-8 py-3 text-center rounded-[8px] cursor-pointer hover:transform hover:scale-105 transition-transform">
                            <MdOutlineTextsms />
                            <p className="text-gray-700">Text</p>
                        </button>

                        <button onClick={() => addInteraction(singleFriend, "video")} className="w-full bg-gray-200 shadow-sm px-8 py-3 text-center rounded-[8px] cursor-pointer hover:transform hover:scale-105 transition-transform">
                            <PiVideoCameraBold />
                            <p className="text-gray-700">Video</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;