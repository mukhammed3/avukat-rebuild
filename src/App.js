import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";

import "./Styles/Main.scss";

import Head from "./Components/Head/Head";
import Nav from "./Components/Nav/Nav";
import UA from "./UA/UA";

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <UA />
        <Head />
        <Nav />
      </Router>
    </>
  );
}
