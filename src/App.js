import React from "react";

import { Header, Skills, Work, Experience, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
