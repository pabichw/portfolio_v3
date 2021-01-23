import React, { Component } from 'react';
import Home from "./components/Panels/Home";
import MenuBar from "./components/MenuBar";
import AboutMe from "./components/Panels/AboutMe";
import Projects from "./components/Panels/Projects";
import Contact from "./components/Panels/Contact";
import ScrollIndicator from "./components/ScrollIndicator";

const rootTitle = 'pabich.cc - ';

const titles = [
  'will code for food',
  'will code for money',
  'hire me, I have no job',
  'null pointer exception',
  'did you know, that an african bush elephant can weight up to 6000kg?'
]

class Portfolio extends Component {
  _changeTitle = () => {
    const idx = Math.floor(Math.random() * titles.length);

    const newTitle = rootTitle + titles[idx];
    document.title = newTitle;
  };

  componentDidMount() {
    this._changeTitle();
  }

  render() {
    return (
      <div className="App">
        <MenuBar/>
        <ScrollIndicator/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <div className="line"/>
        <footer>Powered by pabich.cc<br/>🎵+☕= this website</footer>
      </div>
    );
  }
}

export default Portfolio;
