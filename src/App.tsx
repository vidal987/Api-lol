import React from "react";

import GlobalStyle from "./styles/global";

import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
