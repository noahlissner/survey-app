import {
  Reorder,
  useMotionValue,
  useDragControls,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useState } from "react";
import {
  IoMenu,
  IoChevronDown,
  IoReorderTwo,
  IoReorderThree,
  IoRadioButtonOn,
  IoCheckboxOutline,
  IoCalendarClearOutline,
} from "react-icons/io5";

interface Option {
  id: string;
  text: string;
}

interface IItem {
  type: string;
  name: string;
  question: string;
  id: string;
  options?: Option[];
}

interface Props {
  item: IItem;
  onChange: any;
  createOption: any;
}

const SurveyItem: React.FC<Props> = ({ item, onChange, createOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useDragControls();
  const y = useMotionValue(0);
  return (
    <Reorder.Item
      value={item}
      id={item.id}
      style={{ y }}
      className={`flex flex-col ${isOpen && "mb-[200px]"}`}
      dragListener={false}
      dragControls={controls}
    >
      <main className="relative flex flex-col items-center w-full">
        <section className="relative z-10 bg-white w-full flex items-center justify-between p-7 rounded-2xl">
          <div
            className="bg-black p-3 rounded-2xl"
            onPointerDown={(e) => controls.start(e)}
          >
            <IoMenu size={22} />
          </div>
          <div className="flex items-center gap-3 text-black">
            <input
              type="text"
              className="text-black outline-none text-center"
              value={item.name}
              onChange={(e) => onChange(item.id, undefined, e)}
              name="name"
            />
          </div>
          <div
            className="p-3 bg-blue-400 rounded-xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoChevronDown size={20} />
          </div>
        </section>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="absolute z-0 bg-white text-black p-7 h-[200px] bottom-[-205%] w-full rounded-2xl"
            >
              <div>
                <p>Question</p>
                <input
                  type="text"
                  name="question"
                  className="border border-black outline-none p-1 rounded-md"
                  onChange={(e) => onChange(item.id, undefined, e)}
                  value={item.question}
                />
              </div>
              {item.type === "Multiple Choice" || item.type === "Checkboxes" ? (
                <div>
                  <button onClick={() => createOption(item.id)}>
                    New Option
                  </button>
                  {item.options?.map((option) => (
                    <div key={option.id} className="flex flex-col flex-wrap">
                      <input
                        type="text"
                        name="options"
                        value={option.text}
                        onChange={(e) => onChange(item.id, option.id, e)}
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Reorder.Item>
  );
};

export default SurveyItem;