import React, { useEffect } from "react";
import axios from "axios";
const QuestionList = ({ formData }) => {
  useEffect(() => {
    if (formData) {
      GenerateQuestionsList();
    }
  }, [formData]);

  const GenerateQuestionsList = async () => {
    try {
      const response = await axios.post("/api/ai-model", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return <div>QuestionList</div>;
};

export default QuestionList;
