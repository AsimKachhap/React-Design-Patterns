import React from "react";
import Button from "./Button";

const Modal = ({ shouldOpen, closeHandeler }) => {
  console.log(shouldOpen);
  console.log(closeHandeler);
  return (
    <>
      {shouldOpen && (
        <div className="overlay flex items-center justify-center h-screen ">
          <div className="h-[400px] w-[800px] bg-rose-400 flex items-center justify-center">
            <Button text="Close" hexColor="#DC143C" />
          </div>
        </div>
      )}
      {!shouldOpen && null}
    </>
  );
};

export default Modal;
