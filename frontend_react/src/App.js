import React from "react";

import { Navbar } from "./components";
import { About, Footer, Header, Scills, Testimonial, Work } from "./container";
import "./App.scss";

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
