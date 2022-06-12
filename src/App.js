import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";

import Head from "./Components/Head/Head";
import Nav from "./Components/Nav/Nav";

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Head />
        <Nav />
      </Router>
    </>
  );
}
