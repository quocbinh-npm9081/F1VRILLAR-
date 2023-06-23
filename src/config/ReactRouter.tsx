import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Drivers from "../pages/Drivers";
import Results from "../pages/Results";
const ReactRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/results" element={<Results />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default ReactRouter;
