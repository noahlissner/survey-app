import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoChevronUp,
  IoReorderTwo,
  IoReorderThree,
  IoRadioButtonOn,
  IoCheckboxOutline,
  IoCalendarClearOutline,
} from "react-icons/io5";

const AddQuestion = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {};
  return (
    <div className="absolute bottom-10 left-1/2 translate-x-[-50%]">
      <AnimatePresence>
        {open && (
          <motion.div
            className="add-question-dropdown"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <div className="add-question-option">
              <IoReorderTwo />
              <span>Short Text</span>
            </div>
            <div className="add-question-option">
              <IoReorderThree />
              <span>Long Text</span>
            </div>
            <div className="h-[2px] w-full bg-gray-300"></div>
            <div className="add-question-option">
              <IoRadioButtonOn />
              <span>Multiple Choice</span>
            </div>
            <div className="add-question-option">
              <IoCheckboxOutline />
              <span>Checkboxes</span>
            </div>
            <div className="h-[2px] w-full bg-gray-300"></div>
            <div className="add-question-option">
              <IoCalendarClearOutline />
              <span>Date</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-400 rounded-xl flex items-center pl-0 p-1.5"
      >
        <span className="px-4 text-base font-medium">Add Question</span>
        <div className="bg-[#5FB2FC] h-10 w-10 rounded-xl flex items-center justify-center">
          <IoChevronUp size={22} />
        </div>
      </button>
    </div>
  );
};

export default AddQuestion;
