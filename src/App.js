import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import Loding from "./Loding";
import BeforeAfter from "./BeforeAfter";
import NetFlix from "./Netflix";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dropdown" element={<Dropdown />}></Route>
          <Route path="/loding" element={<Loding />}></Route>
          <Route path="/beforeAfter" element={<BeforeAfter />}></Route>
          <Route path="/netflix" element={<NetFlix />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
