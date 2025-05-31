import React, { useEffect, useState } from "react";
import { ArrowLeft, ChevronDown, Loader2 } from "lucide-react";

// Type button component
const TypeButton = ({ icon, label, selected, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-2 rounded-md border transition-colors ${
        selected
          ? "bg-blue-50 border-blue-200 text-blue-700"
          : "border-gray-200 text-gray-700 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <span className="flex items-center justify-center w-5 h-5">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

// Icon components
const CodeIcon = () => (
  <div className="text-blue-500 font-mono text-sm">&lt;/&gt;</div>
);

const UserIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PuzzleIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
const FormContainer = ({ handleInputChange,goToNext }) => {
  const [interviewTypes, setInterviewTypes] = useState(["Technical"]);

  useEffect(() => {
    if (interviewTypes) {
      handleInputChange("interviewTypes", interviewTypes);
      console.log("interviewTypes", interviewTypes);
    }
  }, [interviewTypes]);
  const addInterviewType = (type) => {
    setInterviewTypes((prev) => {
      const updated = prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type];

      return updated;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      {/* Job Position */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Position
        </label>
        <input
          type="text"
          placeholder="e.g. Senior Frontend Developer"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange("jobPosition", e.target.value)}
        />
      </div>

      {/* Job Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Description
        </label>
        <textarea
          placeholder="Enter detailed job description..."
          rows="5"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange("jobDescription", e.target.value)}
        />
      </div>

      {/* Interview Duration */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interview Duration
        </label>
        <div className="relative">
          <select
            className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              handleInputChange("interviewDuration", e.target.value)
            }
          >
            <option>15 minutes</option>
            <option>30 minutes</option>
            <option>45 minutes</option>
            <option>60 minutes</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Interview Types */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interview Types
        </label>
        <div className="flex flex-wrap gap-2">
          {/* TODO : Make the constant of the Interview type like Technical,Behavioral,Experience,etc... */}
          <TypeButton
            icon={<CodeIcon />}
            label="Technical"
            selected={interviewTypes.includes("Technical")}
            onClick={() => addInterviewType("Technical")}
          />
          <TypeButton
            icon={<UserIcon />}
            label="Behavioral"
            selected={interviewTypes.includes("Behavioral")}
            onClick={() => addInterviewType("Behavioral")}
          />
          <TypeButton
            icon={<BriefcaseIcon />}
            label="Experience"
            selected={interviewTypes.includes("Experience")}
            onClick={() => addInterviewType("Experience")}
          />
          <TypeButton
            icon={<PuzzleIcon />}
            label="Problem Solving"
            selected={interviewTypes.includes("Problem Solving")}
            onClick={() => addInterviewType("Problem Solving")}
          />
          <TypeButton
            icon={<UsersIcon />}
            label="Leadership"
            selected={interviewTypes.includes("Leadership")}
            onClick={() => addInterviewType("Leadership")}
          />
        </div>
      </div>
      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0  border-t border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => goToNext()}
          >
            Generate Questions
            <ChevronDown className="ml-1 w-4 h-4 transform rotate-270" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
