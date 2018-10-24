import React, { Component } from 'react';
import './Section3.sass';
import './Section3Grid.css';
import './style.sass';


class Section3 extends Component {
  render() {
    return (
      <article className="page-articles">
        <section className="title">
          <p ><span className="loremIpsum Orange">Lorem &nbsp;</span><span className="loremIpsum Black">Ipsum</span></p>
        </section>
        <section id="mobile" className="grid3">
          <div className="title-subtitle1">
            <p className="header2">Lorem ipsum dolor sit amet</p>
            <p className="header3">Lorem ipsum dolor sit amet lorem</p>
            <p className="lorem gray" id="section3-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <img className="img1" src="/images/img1.jpg" alt="on the phone"/>
        </section>
        <section id="data" className="grid3">
          <div className="title-subtitle2">
            <p className="header2">Lorem ipsum dolor sit amet</p>
            <p className="header3">Lorem ipsum dolor sit amet lorem</p>
            <p className="lorem gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <img className="img2" src="/images/img2.jpg" alt="digital graph"/>
        </section>
      </article>
    );
  }
}

export default Section3;
