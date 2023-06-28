import React, { useContext } from "react";
import { RatingContext } from "../Rating";

export function RatingLabel() {
  const { rating, labelText } = useContext(RatingContext);

  return (
    <div>
      {labelText(rating)}
    </div>
  );
}
