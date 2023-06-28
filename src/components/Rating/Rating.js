import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { RateList } from "./components/RateList";
import { RatingLabel } from "./components/RatingLabel";

Rating.propTypes = {
  defaultState: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  labelText: PropTypes.func,
  maxValue: PropTypes.number,
  onChangeHover: PropTypes.func,
  onChangeValue: PropTypes.func,
  width: PropTypes.number
};

Rating.defaultProps = {
  defaultState: 0,
  emptyColor: "grey",
  fillColor: "#edaa10",
  height: 53,
  labelText: (value) => `Rating is: ${value}`,
  maxValue: 8,
  onChangeHover: () => {
  },
  onChangeValue: () => {
  },
  width: 53
};

export const RatingContext = createContext();

export function Rating({
                         defaultState,
                         emptyColor,
                         fillColor,
                         height,
                         labelText,
                         maxValue,
                         onChangeHover,
                         onChangeValue,
                         readOnly,
                         width,
                       }) {

  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState(null);

  const setRatingFn = (e) => {
    const value = e.currentTarget.dataset.star;

    setRating(value);
    onChangeValue(value);
  };

  const setHoverFn = (e) => {
    const value = e.type === "mouseleave" ? null : e.currentTarget.dataset.star;
    setHover(value);
    onChangeHover(value);
  };
  return (
    <div>
      <RatingContext.Provider
        value={{
          emptyColor,
          fillColor,
          height,
          hover,
          labelText,
          rating,
          setHover: setHoverFn,
          setRating: setRatingFn,
          width,
          maxValue,
        }}>
        <RatingLabel />
        <RateList />
      </RatingContext.Provider>
    </div>
  );
}
