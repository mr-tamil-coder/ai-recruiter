"use client";
import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import FormContainer from "./_components/FormContainer";
import QuestionList from "./_components/QuestionList";
import { toast } from "sonner";

const InterviewCreationForm = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formData);
  };

  const handleGenerateQuestions = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const onGoToNextStep = () => {
    if (
      !formData?.jobPosition ||
      !formData?.jobDescription ||
      !formData?.interviewDuration
    ) {
      toast("Fill up all the fields");
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className=" min-h-screen bg-red-50">
      <div className="w-full  mx-auto p-4">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft
              className="w-5 h-5 mr-2 cursor-pointer"
              onClick={() => router.back()}
            />
            <span className="font-medium">Create New Interview</span>
          </button>
        </div>

        {/* Blue progress line */}
        <Progress value={83} />

        {/* Form */}
        {step == 1 ? (
          <FormContainer
            handleInputChange={handleInputChange}
            goToNext={onGoToNextStep}
          />
        ) : step == 2 ? (
          <QuestionList formData={formData} />
        ) : (
          <p>Step 3</p>
        )}
      </div>
    </div>
  );
};

export default InterviewCreationForm;
