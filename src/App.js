import React from "react";

import Header from "../src/Components/header/Header";
import About from "../src/Components/about/About";
import Nav from "../src/Components/nav/Nav";
import Experience from "../src/Components/experience/Experience";
import Portfolio from "../src/Components/portfolio/Portfolio";
import Contact from "../src/Components/contact/Contact";
import Footer from "../src/Components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
