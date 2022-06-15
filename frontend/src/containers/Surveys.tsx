import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import HomeTitle from "../components/HomeTitle";
import SurveyCard from "../components/SurveyCard/SurveyCard";
import { IQuestion } from "../models/Survey";
import SurveyBuilder from "../pages/SurveyBuilder";

const Surveys: React.FC = () => {
  const [createNew, setCreateNew] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [surveyToEdit, setSurveyToEdit] = useState<any>();

  const { surveys, surveyLoading, surveyError, surveySuccess, surveyMessage } =
    useSelector((state: RootState) => state.survey);

  const closeBuilder = () => {
    setCreateNew(false);
    setEdit(false);
  };

  const selectEdit = (id: string) => {
    const selectedSurvey = surveys.find((x: IQuestion) => x._id === id);
    setCreateNew(false);
    setSurveyToEdit(selectedSurvey);
    setEdit(true);
  };

  return (
    <div className="h-full">
      {createNew && <SurveyBuilder closeBuilder={closeBuilder} />}
      {edit && (
        <SurveyBuilder
          surveyToEdit={surveyToEdit}
          closeBuilder={closeBuilder}
        />
      )}
      {!createNew && !edit && (
        <section className="flex flex-col p-[100px] pt-[50px]">
          <div className="flex gap-5">
            <HomeTitle title="Surveys" />
            <button
              className="new-survey-btn"
              onClick={() => setCreateNew(true)}
            >
              Create New
            </button>
          </div>
          {/* Surveys Grid */}
          <section className="mt-10 flex gap-[35px] flex-wrap">
            {surveys?.map((item: IQuestion) => (
              <div key={item._id}>
                <SurveyCard item={item} selectEdit={selectEdit} />
              </div>
            ))}
          </section>
        </section>
      )}
    </div>
  );
};

export default Surveys;
