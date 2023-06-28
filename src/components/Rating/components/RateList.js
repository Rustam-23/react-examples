import React, { useContext } from "react";
import { RatingContext } from "../Rating";
import { Star } from "./Star";
import "../Rating.css"

export function RateList() {
  const { maxValue } = useContext(RatingContext);
  
  return (
    <div
      className="star-rating"
    >
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;

        return (
          <Star
            key={index}
            value={value}
          />
        );
      })}
    </div>
  );
}
