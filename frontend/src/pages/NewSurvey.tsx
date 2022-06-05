import { Reorder } from "framer-motion";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { IoArrowBack } from "react-icons/io5";
import AddQuestion from "../components/AddQuestion";
import SurveyItem from "../components/SurveyItem";

interface Props {
  toggleCreateNew: any;
}

class Option {
  constructor(public id: string, public text: string) {}
}

class Question {
  constructor(
    public type: string,
    public name: string,
    public question: string,
    public id: string,
    public options?: Option[]
  ) {}
}

const NewSurvey: React.FC<Props> = ({ toggleCreateNew }) => {
  const [survey, setSurvey] = useState<Question[]>([]);

  const handleClick = (e: any) => {
    console.log(e.target.innerText);
    setSurvey([
      ...survey,
      new Question(e.target.innerText, "New Question", "", uuidv4(), []),
    ]);
  };

  const handleChange = (
    id: string,
    optionId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index: number = survey.findIndex((x) => x.id === id);
    let propName: string = e.target.name;
    let newArr = [...survey];

    if (propName === "name") {
      newArr[index].name = e.target.value;
    } else if (propName === "question") {
      newArr[index].question = e.target.value;
    }

    if (propName === "options") {
      newArr[index].options?.map((item) => {
        if (item.id === optionId) {
          item.text = e.target.value;
        }
      });
    }

    setSurvey(newArr);
  };

  const newOption = (id: string) => {
    console.log(id);
    let index = survey.findIndex((x) => x.id === id);
    let newArr = [...survey];
    newArr[index].options?.push(new Option(uuidv4(), "Option"));
    setSurvey(newArr);
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Saved");
  };

  const handlePublish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Publish");
  };

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
          <form className="flex items-center gap-5">
            <button
              onClick={handleSave}
              className="create-survey-save-publish border-[2px] hover:border-gray-300"
            >
              Save
            </button>
            <button
              onClick={handlePublish}
              className="create-survey-save-publish bg-blue-400 hover:bg-blue-450"
            >
              Publish
            </button>
          </form>
        </section>

        {/* Main grid */}
        <section className="flex flex-col relative mt-7 rounded-t-[80px] w-full h-full bg-blue-600 overflow-hidden">
          <div className="bg-blue-500 h-[120px] flex items-center justify-center">
            <h2 className="text-3xl">Survey #1</h2>
          </div>
          {/* Survey grid */}
          <Reorder.Group
            axis="y"
            values={survey}
            onReorder={setSurvey}
            className="flex-1 mx-[100px] flex flex-col gap-[35px] mt-[35px]"
          >
            {survey.map((item: Question) => (
              <SurveyItem
                item={item}
                key={item.id}
                onChange={handleChange}
                createOption={newOption}
              />
            ))}
          </Reorder.Group>
          {/* Create new Button */}
          <AddQuestion onClick={handleClick} />
        </section>
      </main>
    </div>
  );
};

export default NewSurvey;
