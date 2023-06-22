import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import ReactRouter from "./config/ReactRouter";
import MuiThemeProvider from "./config/MuiThemeProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MuiThemeProvider>
          <ReactRouter />
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
