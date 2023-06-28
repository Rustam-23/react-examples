import { createContext, useContext } from "react";

export const AnswerSelectorContext = createContext(undefined);

export function useAnswerSelectorContext() {
  const context = useContext(AnswerSelectorContext);

  if (!context) {
    throw new Error(
      "Answer selector should be used only with AnswerSelector"
    );
  }
  return context;
}