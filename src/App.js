import React, { Component } from 'react';
import './style/App.scss';
import Home from "./components/Panels/Home";
import MenuBar from "./components/MenuBar";
import AboutMe from "./components/Panels/AboutMe";
import Projects from "./components/Panels/Projects";
import Contact from "./components/Panels/Contact";
import ScrollIndicator from "./components/ScrollIndicator";

class App extends Component {
  state = {
    rootTitle: 'pabich.cc - ',
    titles: [
      'will code for food',
      'will code for money',
      'hire me, I have no job',
      'null pointer exception',
      'did you know, that an african bush elephant can weight up to 6000kg?'
    ]
  };
  _changeTitle = () => {
    const { rootTitle , titles } = this.state;
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

export default App;
