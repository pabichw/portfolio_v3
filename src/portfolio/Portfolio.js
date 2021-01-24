import React, { Component } from 'react';
import Home from "./components/Panels/Home";
import MenuBar from "./components/MenuBar";
import AboutMe from "./components/Panels/AboutMe";
import Projects from "./components/Panels/Projects";
import Contact from "./components/Panels/Contact";
import ScrollIndicator from "./components/ScrollIndicator";

class Portfolio extends Component {
  render() {
    return (
      <main className="App">
        <MenuBar/>
        <ScrollIndicator/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <div className="line"/>
        <footer>Powered by pabich.cc<br/>🎵+☕= this website</footer>
      </main>
    );
  }
}

export default Portfolio;
