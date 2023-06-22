import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default ReactRouter;
