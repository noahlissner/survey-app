import React from "react";

interface Prop {
  value: string;
}

const Button = ({ value }: Prop) => {
  return (
    <button className="bg-blue-400 mt-16 text-white w-[225px] h-[65px] rounded-full text-lg">
      {value}
    </button>
  );
};

export default Button;
