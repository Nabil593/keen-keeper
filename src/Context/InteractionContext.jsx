"use client";

import React, { createContext, useContext, useState } from 'react';

// ১. মেইন কনটেক্সট তৈরি (এটি বাইরে থাকবে)
export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => { // children প্রপ হিসেবে আসবে

    const [interactions, setInteractions] = useState([]); // অনেকগুলো ডাটা রাখার জন্য Array [] ব্যবহার করা ভালো

    const addInteraction = (friend, type) => {
        const newEntry = {
            id: Date.now(),
            friendName: friend.name,
            action: type,
            timeDate: new Date().toLocaleString()
        };
        // নতুন ডাটাকে আগের ডাটাগুলোর সামনে যোগ করা
        setInteractions(prev => [newEntry, ...prev]);
    };

    return (
        // ২. Provider এর মাধ্যমে ভ্যালু পাস করা
        <InteractionContext.Provider value={{ interactions, addInteraction }}>
            {children} 
        </InteractionContext.Provider>
    );
};

// ৩. ডাটা ব্যবহারের জন্য একটি কাস্টম হুক (সহজ করার জন্য)
export const useInteractions = () => useContext(InteractionContext);

export default InteractionProvider;