import React, { useRef } from "react";

export function Uncontrolled() {
  const refInput = useRef();
  const refTextarea = useRef();
  const refSelect = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {
      name: refInput.current.value,
      post: refTextarea.current.value,
      select: refSelect.current.value
    });
  };

  return (
    <div
      style={{
        marginLeft: "20px"
      }}
    >
      <h3>Uncontrolled</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input type="text" ref={refInput} defaultValue="" />
        <label>
          Post:
        </label>
        <textarea ref={refTextarea} defaultValue="" />
        <label>
          Select:
        </label>
        <select ref={refSelect} defaultValue="">
          <option value="" disabled></option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Svelte">Svelte</option>
          <option value="Angular">Angular</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
