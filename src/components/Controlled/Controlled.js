import React, { useState } from "react";

export function Controlled() {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [select, setSelect] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {
      name,
      post,
      select
    });
  };

  return (
    <div>
      <h3>Controlled</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input onChange={event => setName(event.target.value)} />
        <label>
          Post:
        </label>
        <textarea onChange={event => setPost(event.target.value)} />
        <label>
          Select:
        </label>
        <select onChange={event => setSelect(event.target.value)}>
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