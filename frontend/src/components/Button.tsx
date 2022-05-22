import React from "react";

interface Prop {
  value: string;
}

const Button = ({ value }: Prop) => {
  return (
    <button className="bg-blue-400 mt-16 text-white w-[225px] h-[65px] rounded-full duration-150 text-lg hover:bg-[#1a80cd] active:scale-[0.97]">
      {value}
    </button>
  );
};

export default Button;
