import React from "react";

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({ value }) => {
  return (
    <button className="bg-blue-400 mt-16 text-white w-[225px] h-[65px] rounded-full duration-150 text-lg hover:bg-blue-450 active:scale-[0.97]">
      {value}
    </button>
  );
};

export default Button;
