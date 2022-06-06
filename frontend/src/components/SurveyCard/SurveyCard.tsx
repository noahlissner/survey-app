import React from "react";
import SurveyCardTag from "./SurveyCardTag";

const SurveyCard = () => {
  return (
    <div className="flex flex-col bg-blue-600 w-[225px] text-white rounded-xl">
      <SurveyCardTag title="Published" color="#40D96B" />
      <main className="flex flex-col p-5 pt-0 mt-2">
        <h1 className="text-2xl font-medium mb-5">Survey #1</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span>Views</span>
            <span>21</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Answers</span>
            <span>21</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[50px]">
          <button className="survey-card-btn bg-blue-400 hover:bg-blue-450">
            Open
          </button>
          <div className="flex gap-[15px]">
            <button className="survey-card-btn bg-[#D9AE40] hover:bg-[#c29b37]">
              Edit
            </button>
            <button className="survey-card-btn bg-[#ff0000] hover:bg-[#e80000]">
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SurveyCard;
