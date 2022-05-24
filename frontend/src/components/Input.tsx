import React from "react";

interface Props {
  onChange: any;
  value: string;
  label: string;
  name: string;
  type: string;
  icon: any;
}

const Input: React.FC<Props> = ({
  onChange,
  value,
  label,
  name,
  type,
  icon,
}) => {
  return (
    <div className="overflow-hidden relative w-full bg-blue-300 dark:bg-blue-800 rounded-[20px] flex items-center">
      <input
        type={type}
        id={name}
        name={name}
        className="autofill:bg-yellow-300 bg-transparent block px-4 pb-3 pt-6 w-full focus:outline-none focus:border-blue-600 peer text-lg dark:text-white"
        placeholder=" "
        onChange={onChange}
        value={value}
      />
      <label
        htmlFor={name}
        className="text-black dark:text-white pointer-events-none absolute text-base transition-transform duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-focus:text-gray-400 dark:peer-focus:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
      <div className="pr-4">{icon}</div>
    </div>
  );
};

export default Input;
