import React, { useContext } from "react";
import { RatingContext } from "../Rating";
import "../Rating.css";

export function Star({ value }) {
  const {
    emptyColor,
    fillColor,
    height,
    hover,
    rating,
    setHover,
    setRating,
    width
  } = useContext(RatingContext);

  console.log(value);

  return (
    <div
      className="star"
      data-star={value}
      onClick={setRating}
      onMouseEnter={setHover}
      onMouseLeave={setHover}
    >
      <svg
        data-rating={value}
        fill={value <= (hover || rating) ? fillColor : emptyColor}
        viewBox="0 0 25 25"
        height={height}
        width={width}
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
}
