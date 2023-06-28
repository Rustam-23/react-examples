import React from "react";
import { Uncontrolled } from "./Uncontrolled/Uncontrolled";
import { Controlled } from "./Controlled/Controlled";

export function Inputs() {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        marginLeft: "20px",
      }}>
      <Uncontrolled />
      <Controlled />
    </div>
  );
}
