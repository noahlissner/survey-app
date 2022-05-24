import React from "react";

interface Props {
  title: string;
}

const HomeTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="text-4xl font-semibold text-black dark:text-white">
      {title}
      <span className="text-blue-400 text-4xl">.</span>
    </h1>
  );
};

export default HomeTitle;
