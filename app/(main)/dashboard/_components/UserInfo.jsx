"use client";

import React, { useState } from "react";

const UserInfo = () => {
      const [userName, setUserName] = useState("Sarah");
    
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back, {userName}!
        </h2>
        <p className="text-gray-600">
          AI-Driven Interviews, Hassle-Free Hiring
        </p>
      </div>

      <div className="flex items-center">
        <div className="mr-4 relative">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </div>

        <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
          {userName.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
