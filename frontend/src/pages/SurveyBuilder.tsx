import { Reorder } from "framer-motion";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { IoArrowBack } from "react-icons/io5";
import AddQuestion from "../components/AddQuestion";
import SurveyItem from "../components/SurveyItem";
import surveyService from "../features/surveys/surveyApi";
import { IItem, IQuestion } from "../models/Survey";

interface Props {
  closeBuilder?: any;
  surveyToEdit?: any;
}

class Option {
  constructor(public id: string, public text: string) {}
}

class Questions {
  constructor(
    public surveyType: string,
    public name: string,
    public question: string,
    public id: string,
    public options?: Option[]
  ) {}
}

interface INewSurvey {
  name: string;
  questions: Questions[];
  _id?: string;
}

const SurveyBuilder: React.FC<Props> = ({ closeBuilder, surveyToEdit }) => {
  const [surveyQuestions, setSurveyQuestions] = useState<Questions[]>([]);
  const [surveyName, setSurveyName] = useState<string>("");

  const handleClick = (e: any) => {
    setSurveyQuestions([
      ...surveyQuestions,
      new Questions(e.target.innerText, "New Question", "", uuidv4(), []),
    ]);
  };

  const handleChange = (
    id: string,
    optionId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index: number = surveyQuestions.findIndex((x) => x.id === id);
    let propName: string = e.target.name;
    let newArr = [...surveyQuestions];

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

    setSurveyQuestions(newArr);
  };

  const newOption = (id: string) => {
    let index = surveyQuestions.findIndex((x) => x.id === id);
    let newArr = [...surveyQuestions];
    newArr[index].options?.push(new Option(uuidv4(), "Option"));
    setSurveyQuestions(newArr);
  };

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const tempSurvey: INewSurvey = {
      name: surveyName,
      questions: surveyQuestions,
      _id: surveyToEdit._id,
    };

    if (surveyToEdit) {
      console.log(tempSurvey);
    }

    const retval = await surveyService.newSurvey(tempSurvey, "");
  };

  const handlePublish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (surveyToEdit) {
      let tempArr: any = [];
      surveyToEdit.questions.forEach((item: Questions) => {
        const question = new Questions(
          item.surveyType,
          item.name,
          item.question,
          item.id,
          []
        );
        item.options?.forEach((opt) => {
          const option = new Option(opt.id, opt.text);
          question.options?.push(option);
        });
        tempArr.push(question);
      });
      setSurveyQuestions(tempArr);
    }

    console.log(surveyToEdit);
  }, []);

  return (
    <div className="h-full flex flex-col w-full">
      <button
        className="ml-10 flex items-center gap-2 text-lg text-black dark:text-white"
        onClick={closeBuilder}
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
            <input
              onChange={(e) => setSurveyName(e.target.value)}
              value={surveyName}
              className="text-3xl bg-transparent outline-none placeholder-white"
              placeholder="Survey name..."
            />
          </div>
          {/* Survey grid */}
          <Reorder.Group
            axis="y"
            values={surveyQuestions}
            onReorder={setSurveyQuestions}
            className="flex-1 mx-[100px] flex flex-col gap-[35px] mt-[35px]"
          >
            {surveyQuestions.map((item: IItem) => (
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

export default SurveyBuilder;
