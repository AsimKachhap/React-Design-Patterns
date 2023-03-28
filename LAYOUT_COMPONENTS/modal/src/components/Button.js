import React from "react";

const Button = ({ openHandler, text, hexColor }) => {
  console.log(openHandler);
  return (
    <div
      className={`px-12 py-6 bg-[${hexColor}] text-black border-[1px] border-black text-2xl font-semibold rounded-md cursor-pointer `}
    >
      {text}
    </div>
  );
};

export default Button;
