"use client";

import React, { createContext, useContext, useState } from 'react';

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {

    const [interactions, setInteractions] = useState([]);

    const addInteraction = (friend, type) => {
        const newEntry = {
            id: Date.now(),
            friendName: friend.name,
            action: type,
            timeDate: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
            todayTime: new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            })
        };

        setInteractions(prev => [newEntry, ...prev]);
    };

    return (
        <InteractionContext.Provider value={{ interactions, addInteraction }}>
            {children}
        </InteractionContext.Provider>
    );
};

export const useInteractions = () => useContext(InteractionContext);

export default InteractionProvider;