import React from "react";
import s from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  handleOnClick: () => void;
};

export default function Button({ children, handleOnClick }: Props) {
  return (
    <button className={s.button} onClick={handleOnClick}>
      {children}
    </button>
  );
}
