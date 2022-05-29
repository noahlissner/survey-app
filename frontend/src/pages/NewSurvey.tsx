import React from "react";

import { IoArrowBack } from "react-icons/io5";
import AddQuestion from "../components/AddQuestion";

interface Props {
  toggleCreateNew: any;
}

const NewSurvey: React.FC<Props> = ({ toggleCreateNew }) => {
  return (
    <div className="h-full flex flex-col w-full">
      <button
        className="ml-10 flex items-center gap-2 text-lg text-black dark:text-white"
        onClick={toggleCreateNew}
      >
        <IoArrowBack size={20} />
        Go Back
      </button>
      <main className="max-w-[1200px] flex-1 w-full flex flex-col mx-auto text-black dark:text-white">
        {/* Top section */}
        <section className="flex items-center justify-between ">
          <h1 className="text-white text-4xl font-semibold">Survey Builder</h1>
          <div className="flex items-center gap-5">
            <button className="create-survey-save-publish border-[2px] hover:border-gray-300">
              Save
            </button>
            <button className="create-survey-save-publish bg-blue-400 hover:bg-blue-450">
              Publish
            </button>
          </div>
        </section>

        {/* Main grid */}
        <section className="relative mt-7 rounded-t-[80px] w-full h-full bg-blue-600 overflow-hidden">
          <div className="bg-blue-500 h-[120px] flex items-center justify-center">
            <h2 className="text-3xl">Survey #1</h2>
          </div>

          {/* Create new Button */}
          <AddQuestion />
        </section>
      </main>
    </div>
  );
};

export default NewSurvey;
