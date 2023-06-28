import React, { useState } from "react";
import { useEffectSkipMount } from "../hooks";
import { AnswerSelectorContext } from "../context";
import { Radio } from "../Radio";
import { Check } from "../Check";
import { Question } from "../Question";

export function AnswerSelector({ children, id, onChange }) {
  const [answer, setAnswer] = useState();

  useEffectSkipMount(() => {
    onChange({ id, answer });
  }, [answer]);

  return (
    <AnswerSelectorContext.Provider
      value={{
        answer,
        setAnswer,
        questionId: id
      }}>
      <div>
        {children}
      </div>
    </AnswerSelectorContext.Provider>
  );
}

AnswerSelector.Radio = Radio;
AnswerSelector.Check = Check;
AnswerSelector.Question = Question;
