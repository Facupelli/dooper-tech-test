import React from "react";

import s from "./SearchInput.module.css";

type Props = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchInput({ setSearchInput }: Props) {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  return (
    <input
      className={s.search_input}
      type="search"
      placeholder="search a movie title..."
      onChange={(e) => handleOnChange(e)}
    />
  );
}
