import React, { Component } from 'react';
import './App.sass';
import './style.sass';

import Hero from './Hero';
import Nav from './Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Modal from './Modal';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Modal />
        <Footer />
      </div>
    );
  }
}

export default App;
