import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dropdown" element={<Dropdown />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
