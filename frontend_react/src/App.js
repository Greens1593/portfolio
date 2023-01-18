import React from "react";

import { About, Footer, Header, Scills, Testimonial, Work } from "./container";
import "./App.scss";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Scills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
