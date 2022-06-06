import React, { useState } from "react";
import HomeTitle from "../components/HomeTitle";
import SurveyCard from "../components/SurveyCard/SurveyCard";
import NewSurvey from "../pages/NewSurvey";

const Surveys: React.FC = () => {
  const [createNew, setCreateNew] = useState<boolean>(false);

  const toggleCreateNew = () => {
    setCreateNew(!createNew);
  };
  return (
    <div className="h-full">
      {createNew ? (
        <NewSurvey toggleCreateNew={toggleCreateNew} />
      ) : (
        <section className="flex flex-col p-[100px] pt-[50px]">
          <div className="flex gap-5">
            <HomeTitle title="Surveys" />
            <button className="new-survey-btn" onClick={toggleCreateNew}>
              Create New
            </button>
          </div>
          {/* Surveys Grid */}
          <section className="mt-10 flex gap-[35px] flex-wrap">
            <SurveyCard />
            <SurveyCard />
            <SurveyCard />
          </section>
        </section>
      )}
    </div>
  );
};

export default Surveys;
