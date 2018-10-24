import React, { Component } from 'react';
import './Section1.sass';
import './style.sass';


class Section1 extends Component {
  render() {
    return (
      <article className="page-articles">
        <section className="grid">
          <div className="page-item">
            <img src="images/page-icon.svg" alt="page icon" />
            <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos</p>
          </div>
          <div className="page-item">
            <img src="images/page-icon.svg" alt="page icon" />
            <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos</p>
          </div>
          <div className="page-item">
            <img src="images/page-icon.svg" alt="page icon" />
            <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos</p>
          </div>
          <div className="page-item">
            <img src="images/page-icon.svg" alt="page icon" />
            <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos</p>
          </div>
        </section>
        <section className="slanted">

          <img className="slanted-img" src="images/slanted-gradient-background.png" alt="slanted page" />

          <p className="slanted-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sit amet, consectetur adipisicing</p>

        </section>
      </article>
    );
  }
}

export default Section1;
