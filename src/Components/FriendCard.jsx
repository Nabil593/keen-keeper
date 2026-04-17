import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
  // Status color logic
  const statusColor = 
    friend.status === "on-track" ? "badge-success" : 
    friend.status === "overdue" ? "badge-error" : "badge-warning";

  return (
    <div className="flex justify-center">
      <Link href={`friends/${friend.id}`} className="card bg-white w-full max-w-sm shadow-sm hover:shadow-2xl transition-all border border-gray-100">
        <div className="flex flex-col items-center pt-8">
          <figure className="rounded-full p-1">
            <Image 
              src={friend.picture} 
              alt={friend.name} 
              width={100} 
              height={100} 
              className="rounded-full object-cover" 
            />
          </figure>
        </div>

        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title text-xl font-bold">
            {friend.name}
          </h2>

            <p className='text-gray-400'>{friend.days_since_contact}d ago</p>

          <div className="card-actions justify-center">
            {friend?.tags?.map((tag, index) => (
              <div key={index} className="badge border-none bg-[#CBFADB] text-[#244D3F] font-medium">
                {tag}
              </div>
            ))}
          </div>

          <div className={`badge ${statusColor} text-xs text-white font-medium uppercase`}>
              {friend.status}
            </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;