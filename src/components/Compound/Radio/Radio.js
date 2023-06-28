import React from "react";
import { useAnswerSelectorContext } from "../context";

export function Radio({ id, children }) {
  const { questionId, setAnswer } = useAnswerSelectorContext();


  const handleClick = () => {
    setAnswer(id);
  };

  return (
    <div>
      <label>
        {children}
      </label>
      <input
        type="radio"
        id={id}
        value={id}
        name={questionId}
        onClick={handleClick}
      />
    </div>
  );
}
