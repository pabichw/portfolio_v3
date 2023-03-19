import React from 'react';
import Home from "./components/Panels/Home";
import MenuBar from "./components/MenuBar";
import AboutMe from "./components/Panels/AboutMe";
import Projects from "./components/Panels/Projects";
import Contact from "./components/Panels/Contact";
import ScrollIndicator from "./components/ScrollIndicator";


const Portfolio = ({ postsData }) => {

  return (
    <main className="App">
      <MenuBar />
      <ScrollIndicator />
      <Home />
      <AboutMe postsData={postsData} />
      <Projects />
      <Contact />
      <div className="line" />
      <footer>Powered by pabich.cc<br />🎵+☕= this website</footer>
    </main>
  );
}

export default Portfolio;
