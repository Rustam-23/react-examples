import "./App.css";
import { Cart } from "./components/Cart";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExampleRenderProps } from "./components/RenderProps/ExampleRenderProps";
import { Inputs } from "./components/Inputs";
import { QuestionPage } from "./components/QuestionPage";
import { Rating } from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ExampleRenderProps />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
