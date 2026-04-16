"use client";
import FriendCard from "@/Components/FriendCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const featchFriends = async () => {
      const res = await fetch("/Data/friends.json");
      const data = await res.json();
      setFriends(data);
    };

    featchFriends();
  }, []);

  if (friends.length === 0) return <div className="text-center p-20 text-2xl text-black font-bold">Loading...</div>

  return (
    <div className="max-w-[1300px] mx-auto w-full space-y-20 mb-30">
      <div className="text-center mt-20 space-y-6">
        <h2 className="text-5xl font-bold">
          Friends to keep close in your life
        </h2>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br></br> the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-[20px]">+ Add a Friend</button>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="bg-white shadow-lg p-8 text-center rounded-[8px]">
          <h2 className="text-3xl font-semibold mb-2">{friends.length}</h2>
          <p className="text-gray-700">Total Friends</p>
        </div>

        <div className="bg-white shadow-lg p-8 text-center rounded-[8px]">
          <h2 className="text-3xl font-semibold mb-2">
            {friends.filter((friend) => friend.status === "on-track").length}
          </h2>
          <p className="text-gray-700">On Track</p>
        </div>

        <div className="bg-white shadow-lg p-8 text-center rounded-[8px]">
          <h2 className="text-3xl font-semibold mb-2">6</h2>
          <p className="text-gray-700">New Attention</p>
        </div>

        <div className="bg-white shadow-lg p-8 text-center rounded-[8px]">
          <h2 className="text-3xl font-semibold mb-2">10</h2>
          <p className="text-gray-700">Interactions This Month</p>
        </div>
      </div>

      <hr className="text-gray-300"></hr>

      <div>
        <h2 className="text-2xl font-bold mb-10">Your Friends</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {friends.map((friend) => (
            <div key={friend.id}>
              <FriendCard friend={friend} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
