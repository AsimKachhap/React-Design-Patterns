import React from "react";

const Button2 = (clickHandler) => {
  console.log(clickHandler);
  return (
    <div className="h-[60px] w-[60px] bg-blue-500  " onClick={clickHandler}>
      Button2
    </div>
  );
};

export default Button2;
