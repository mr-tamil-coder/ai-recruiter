"use client";

import React, { useState } from "react";
import { FaVideo, FaPhone, FaClipboard, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import UserInfo from "./_components/UserInfo";

const Dashboard = () => {
  const [userName, setUserName] = useState("Sarah");

  // Mock data for previously created interviews
  const interviews = [
    {
      id: 1,
      company: "Google",
      position: "Full Stack Developer",
      date: "20 Oct 2024",
      duration: "30 Min",
      logo: "G",
    },
    {
      id: 2,
      company: "Facebook",
      position: "Full Stack Developer",
      date: "20 Oct 2024",
      duration: "30 Min",
      logo: "F",
    },
    {
      id: 3,
      company: "HubSpot",
      position: "Full Stack Developer",
      date: "20 Oct 2024",
      duration: "30 Min",
      logo: "H",
    },
  ];

  // TODO : Make a seperate folder "_components" and add the component of CreateOptions and LatestInterviews

  return (
    <div className=" min-h-screen max-w-7xl bg-red-50">
      {/* Main Content */}
      <div className="flex-1 p-8">
        
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
            <p className="text-gray-600 mb-4">
              Create AI interviews and schedule them with candidates
            </p>
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
              <h4 className="text-lg font-semibold">
                Create Phone Screening Call
              </h4>
            </div>
            <p className="text-gray-600 mb-4">
              Schedule phone screening calls with potential candidates
            </p>
            <button className="flex items-center text-blue-600 font-medium">
              <span className="mr-2">Schedule</span>
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Previously Created Interviews */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Previously Created Interviews
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${
                      interview.logo === "G"
                        ? "bg-blue-500"
                        : interview.logo === "F"
                        ? "bg-blue-700"
                        : "bg-orange-500"
                    }`}
                  >
                    {interview.logo}
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-500 text-sm">
                      {interview.date}
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-1">{interview.position}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  {interview.duration}
                </p>

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
