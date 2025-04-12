import React, { useRef } from "react";
import Button from "./Button";


export default function Dialog({ children, buttonDescription, closeDialog }) {

  
  return (
    <dialog
      className="backdrop:bg-gray/90 fixed w-screen z-2 h-screen p-10 my-0 mx-auto grid content-center justify-center gap-8 bg-gray/97 text-white text-center"
    >
      {children}
      <form method="dialog">
        <Button onClick={closeDialog}>{buttonDescription}</Button>
      </form>
    </dialog>
)}
