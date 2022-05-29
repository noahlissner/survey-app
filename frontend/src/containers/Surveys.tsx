import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <>
          <h1 className="text-6xl text-white">Surveys</h1>
          <button onClick={toggleCreateNew}>Create New</button>
        </>
      )}
    </div>
  );
};

export default Surveys;
