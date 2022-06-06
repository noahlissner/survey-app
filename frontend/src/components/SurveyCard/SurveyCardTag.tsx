import React from "react";

interface Props {
  title: string;
  color: string;
}

const SurveyCardTag: React.FC<Props> = ({ title, color }) => {
  console.log(color);
  return (
    <div
      style={{ background: color }}
      className="flex items-center justify-center rounded-xl self-end w-fit mt-2 mr-2 px-2 text-xs"
    >
      <span>{title}</span>
    </div>
  );
};

export default SurveyCardTag;
