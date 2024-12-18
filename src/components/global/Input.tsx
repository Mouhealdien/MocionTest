import React from "react";

type PropsType = {
  inputProps: React.HTMLProps<HTMLInputElement>;
  label?: string;
  labelStyle?: string;
  icon?: string;
};

const Input = ({ inputProps, label, icon }: PropsType) => {
  return (
    <div className="w-full relative">
      {label && (
        <label className={`block mb-2 text-sm  text-primary`}>
          {label}
          <span className="text-red-500">*</span>
        </label>
      )}
      <div className="relative">
        <input
          {...inputProps}
          className="bg-white border text-xs   border-gray-300 text-[#747474] rounded-lg focus:outline-primary  focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400  "
        />
        <div className="absolute top-2.5 right-2 text-primary text-xs ">
          {" "}
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Input;
