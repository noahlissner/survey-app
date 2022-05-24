const SettingsGeneral = () => {
  return (
    <div className="w-full mr-[163px]">
      <div className="flex flex-col items-center text-black dark:text-white">
        <h1 className="text-6xl mb-10">General</h1>
        <form className="flex gap-[300px]">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Privacy</h3>
            <p className="font-light mb-4">Who can access?</p>
            <fieldset className="mb-5">
              <span>Surveys</span>
              <div className="flex items-center gap-3 mt-2 mb-3">
                <input type="radio" name="survey" id="surveyEveryone" />
                <label htmlFor="surveyEveryone">Everyone</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="survey" id="surveyInvite" />
                <label htmlFor="surveyInvite">Invitve Only</label>
              </div>
            </fieldset>
            <fieldset>
              <span>Quizes</span>
              <div className="flex items-center gap-3 mt-2 mb-3">
                <input type="radio" name="quiz" id="surveyEveryone" />
                <label htmlFor="surveyEveryone">Everyone</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="quiz" id="surveyInvite" />
                <label htmlFor="surveyInvite">Invitve Only</label>
              </div>
            </fieldset>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Notifications</h3>
            <p className="font-light mb-4">Do you want notificatios?</p>
            <fieldset>
              <div className="flex items-center gap-3 mt-2 mb-3">
                <input
                  type="checkbox"
                  name="surveyCompleted"
                  id="surveyCompleted"
                />
                <label htmlFor="surveyCompleted">Survey Completed</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="quizCompleted"
                  id="quizCompleted"
                />
                <label htmlFor="quizCompleted">Quiz Completed</label>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsGeneral;
