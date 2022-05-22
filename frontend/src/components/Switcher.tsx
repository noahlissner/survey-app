import React, { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { AnimatePresence, motion } from "framer-motion";

import { IoMoon, IoSunny } from "react-icons/io5";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [isOn, setIsOn] = useState(false);

  const toggleDarkMode = () => {
    setIsOn(colorTheme === "light" ? false : true);
    setTheme(colorTheme);
  };

  return (
    <div onClick={toggleDarkMode}>
      {isOn ? (
        <div className="flex gap-4 items-center cursor-pointer text-white w-fit">
          <AnimatePresence>
            <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
              <IoSunny size={30} />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex gap-4 items-center cursor-pointer text-black">
          <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
            <IoMoon size={30} />
          </motion.div>
        </div>
      )}
    </div>
  );
}
