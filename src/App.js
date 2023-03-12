import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import Loding from "./Loding";
import BeforeAfter from "./BeforeAfter";
import NetFlix from "./Netflix";
import DropdownMenu from "./DropdownMenu";
import ButtonTest from "./ButtonTest";

function App() {
  return (
    <div className="App">
      <ButtonTest />
      <BrowserRouter>
        <Routes>
          <Route path="/dropdown" element={<Dropdown />}></Route>
          <Route path="/loding" element={<Loding />}></Route>
          <Route path="/beforeAfter" element={<BeforeAfter />}></Route>
          <Route path="/netflix" element={<NetFlix />}></Route>
          <Route path="/dropdownMenu" element={<DropdownMenu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
