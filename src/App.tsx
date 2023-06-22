import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import ReactRouter from "./config/ReactRouter";
import MuiThemeProvider from "./config/MuiThemeProvider";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MuiThemeProvider>
          <NavBar />
          <ReactRouter />
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
