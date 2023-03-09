import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button
        onClick={() => {
          navigate("/dropdown");
        }}
      >
        dropdown
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/dropdown"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
