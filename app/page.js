"use client";

import React, { useState } from 'react';
import { FaVideo, FaPhone, FaClipboard, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Dashboard = () => {
  const [userName, setUserName] = useState('Sarah');
  
  // Mock data for previously created interviews
  const interviews = [
    { id: 1, company: 'Google', position: 'Full Stack Developer', date: '20 Oct 2024', duration: '30 Min', logo: 'G' },
    { id: 2, company: 'Facebook', position: 'Full Stack Developer', date: '20 Oct 2024', duration: '30 Min', logo: 'F' },
    { id: 3, company: 'HubSpot', position: 'Full Stack Developer', date: '20 Oct 2024', duration: '30 Min', logo: 'H' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-indigo-600">AIcruiter</h1>
        </div>
        <div className="mt-4">
          <button className="flex items-center mx-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            <span className="mr-2">+</span>
            Create New Interview
          </button>
          
          <nav className="mt-8">
            <div className="px-4 py-2 flex items-center text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600">
              <div className="mr-3 text-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
                </svg>
              </div>
              Dashboard
            </div>
            
            <div className="px-4 py-2 flex items-center text-gray-600 hover:bg-gray-100">
              <div className="mr-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              Scheduled Interview
            </div>
            
            <div className="px-4 py-2 flex items-center text-gray-600 hover:bg-gray-100">
              <div className="mr-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              All Interview
            </div>
            
            <div className="px-4 py-2 flex items-center text-gray-600 hover:bg-gray-100">
              <div className="mr-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              Billing
            </div>
            
            <div className="px-4 py-2 flex items-center text-gray-600 hover:bg-gray-100">
              <div className="mr-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              Settings
            </div>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userName}!</h2>
            <p className="text-gray-600">AI-Driven Interviews, Hassle-Free Hiring</p>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4 relative">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </div>
            
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              {userName.charAt(0)}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h3>
        
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <FaVideo className="text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold">Create New Interview</h4>
            </div>
            <p className="text-gray-600 mb-4">Create AI interviews and schedule them with candidates</p>
            <button className="flex items-center text-blue-600 font-medium">
              <span className="mr-2">Create</span>
              <FaArrowRight size={12} />
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <FaPhone className="text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold">Create Phone Screening Call</h4>
            </div>
            <p className="text-gray-600 mb-4">Schedule phone screening calls with potential candidates</p>
            <button className="flex items-center text-blue-600 font-medium">
              <span className="mr-2">Schedule</span>
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
        
        {/* Previously Created Interviews */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Previously Created Interviews</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviews.map((interview) => (
              <div key={interview.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${
                    interview.logo === 'G' ? 'bg-blue-500' : 
                    interview.logo === 'F' ? 'bg-blue-700' : 'bg-orange-500'
                  }`}>
                    {interview.logo}
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-500 text-sm">{interview.date}</div>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-1">{interview.position}</h4>
                <p className="text-gray-600 text-sm mb-4">{interview.duration}</p>
                
                <div className="flex justify-between">
                  <button className="flex items-center text-gray-600 text-sm">
                    <FaClipboard className="mr-2" size={14} />
                    Copy Link
                  </button>
                  
                  <button className="flex items-center bg-blue-600 text-white px-4 py-1 rounded-md text-sm">
                    <span className="mr-2">Send</span>
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;