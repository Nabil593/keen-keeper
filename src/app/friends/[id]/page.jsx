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
        <div className="max-w-[1200px] mx-auto w-full my-20 lg:px-12 md:px-6 px-4 flex lg:flex-row flex-col gap-6">
            <div className="lg:w-[50%] md:w-full ">
                <div className=" bg-white w-full shadow-sm rounded-md border border-gray-100 mb-4">

                    <div className="card-body items-center text-center space-y-2">

                        <figure className="rounded-full p-1">
                            <Image
                                src={singleFriend.picture}
                                alt={singleFriend.name}
                                width={100}
                                height={100}
                                className="rounded-full object-cover"
                            />
                        </figure>


                        <h2 className="card-title text-xl font-bold">
                            {singleFriend.name}
                        </h2>

                        <div className={`badge ${statusColor} text-xs text-white font-medium uppercase`}>
                            {singleFriend.status}
                        </div>

                        <div className="card-actions justify-center">
                            {singleFriend?.tags?.map((tag, index) => (
                                <div key={index} className="badge border-none bg-[#CBFADB] text-[#244D3F] font-medium">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <p className="italic text-gray-400">&quot;{singleFriend.bio}&quot;</p>

                        <p className="font-medium text-gray-600">{singleFriend.email}</p>
                    </div>
                </div>

                <div className="h-full flex flex-col gap-2">
                    <button className="btn bg-white text-black border-none shadow-sm font-medium"><PiBellSimpleZBold /> Snooze 2 weeks</button>
                    <button className="btn bg-white text-black border-none shadow-sm font-medium"><PiArchiveBold /> Archive</button>
                    <button className="btn bg-white border-none shadow-sm text-[#EF4444] font-medium"><RiDeleteBinLine /> Delete</button>
                </div>
            </div>


            <div className="w-full flex flex-col gap-6">
                <div className="w-full flex lg:flex-row md:flex-row flex-col gap-6">
                    <div className="w-full bg-white shadow-sm p-8 text-center rounded-[8px]">
                        <h2 className="text-2xl font-semibold mb-2">{singleFriend.days_since_contact}</h2>
                        <p className="text-gray-500">Days Since Contact</p>
                    </div>

                    <div className="w-full bg-white shadow-sm p-8 text-center rounded-[8px]">
                        <h2 className="text-2xl font-semibold mb-2">{singleFriend.goal}</h2>
                        <p className="text-gray-500">Goal (Days)</p>
                    </div>

                    <div className="w-full bg-white shadow-sm p-8 text-center rounded-[8px]">
                        <h2 className="text-2xl font-semibold mb-2">{singleFriend.next_due_date}</h2>
                        <p className="text-gray-500">Next Due</p>
                    </div>
                </div>

                <div className="w-full bg-white shadow-sm p-6 rounded-[8px] space-y-2">
                    <div className="flex justify-between">
                        <p className="text-[20px] font-medium text-[#244D3F]">Relationship Goal</p>
                        <button className="btn bg-gray-200 border-none shadow-sm text-black">Edit</button>
                    </div>
                    <p className="text-gray-500">Connect every <span className="text-black font-bold">{singleFriend.goal} days</span></p>
                </div>

                <div className="w-full bg-white shadow-sm p-8 rounded-[8px] space-y-4">
                    <p className="text-[20px] font-medium text-[#244D3F]">Quick Check In</p>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6">
                        <button onClick={() => addInteraction(singleFriend, "call")} className="w-full bg-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 px-8 py-4 text-center rounded-[8px] cursor-pointer transition-transform duration-150 active:scale-96">
                            <LuPhoneCall className="text-3xl" />
                            <p className="text-gray-700">Call</p>
                        </button>

                        <button onClick={() => addInteraction(singleFriend, "text")} className="w-full bg-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 px-8 py-4 text-center rounded-[8px] cursor-pointer transition-transform duration-150 active:scale-96">
                            <MdOutlineTextsms className="text-3xl" />
                            <p className="text-gray-700">Text</p>
                        </button>

                        <button onClick={() => addInteraction(singleFriend, "video")} className="w-full bg-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 px-8 py-4 text-center rounded-[8px] cursor-pointer transition-transform duration-150 active:scale-96">
                            <PiVideoCameraBold className="text-3xl" />
                            <p className="text-gray-700">Video</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;