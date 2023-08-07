import React from "react";
import { Route, Routes } from "react-router-dom";
import Dish from "./Dish/Dish";
import Dishes from "./Dishes/Dishes";
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dishes />} />
      <Route exact path="/dishes/:slug" element={<Dish />} />
    </Routes>
  )
};

export default App;
