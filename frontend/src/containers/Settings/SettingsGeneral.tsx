import { ChangeEvent, useState } from "react";
import Checkbox from "../../components/Checkbox";
import Radio from "../../components/Radio";

const SettingsGeneral = () => {
  const [privacySurvey, setPrivacySurvey] = useState("surveyEveryone");
  const [privacyQuiz, setPrivacyQuiz] = useState("quizEveryone");

  const privacySurveyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrivacySurvey(e.target.value);
  };

  const privacyQuizChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrivacyQuiz(e.target.value);
  };

  return (
    <div className="w-full mr-[163px]">
      <div className="flex flex-col items-center text-black dark:text-white">
        <h1 className="text-6xl mb-10">General</h1>
        <form className="flex w-1/2 justify-between gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Privacy</h3>
            <p className="font-light mb-4">Who can access?</p>
            <fieldset className="mb-5 flex flex-col gap-2">
              <span>Surveys</span>
              <div className="flex flex-col gap-3">
                <Radio
                  title="Everyone"
                  name="survey"
                  id="surveyEveryone"
                  checked={privacySurvey}
                  onChange={privacySurveyChange}
                />
                <Radio
                  title="Invited Only"
                  name="survey"
                  id="surveyInvite"
                  checked={privacySurvey}
                  onChange={privacySurveyChange}
                />
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <span>Quizes</span>
              <div className="flex flex-col gap-3">
                <Radio
                  title="Everyone"
                  name="quiz"
                  id="quizEveryone"
                  checked={privacyQuiz}
                  onChange={privacyQuizChange}
                />
                <Radio
                  title="Invite Only"
                  name="quiz"
                  id="quizInvite"
                  checked={privacyQuiz}
                  onChange={privacyQuizChange}
                />
              </div>
            </fieldset>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Notifications</h3>
            <p className="font-light mb-4">Do you want notificatios?</p>
            <fieldset className="mb-5 flex flex-col gap-2">
              <span>Surveys</span>
              <div className="flex flex-col gap-3">
                <Checkbox
                  title="Survey Completed"
                  name="surveyCompleted"
                  id="surveyCompleted"
                />
                <Checkbox
                  title="Daily Update"
                  name="surveyDailyUpdate"
                  id="surveyDailyUpdate"
                />
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <span>Quizes</span>
              <div className="flex flex-col gap-3">
                <Checkbox
                  title="Quiz Completed"
                  name="quizCompleted"
                  id="quizCompleted"
                />
                <Checkbox
                  title="Daily Update"
                  name="quizDailyUpdate"
                  id="quizDailyUpdate"
                />
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsGeneral;
