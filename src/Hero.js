import React, { Component } from 'react';
import './Hero.sass';
import './Hero.css';
import Modal from './Modal';
import './style.sass';

class Header extends Component {
  render() {
    return (
      <header className="hero">

        <div className="carousel" data-ride="carousel">


          <ol className="carousel-indicators circular-inicator">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>


          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="overlay"></div>
              <img className="d-block w-100" src="/images/hero-img.jpg" alt="First slide" />
              <div className="carousel-caption">
                  <div>
                      <h3 className="animated fadeInDown hero-text">Lorem Ipsum Lorem Ipsum</h3>
                      <a href="#mobile" ><button className="pull-left" type="button">Button</button></a>
                    </div>

              </div>
              <button type="button" className="envelope-wrap" data-toggle="modal" data-target="#myModal">
                <img className="envelope-icon" src="/images/envelope2.svg" alt="envelope icon"/>
              </button>
            </div>
            <div className="carousel-item">
              <div className="overlay"></div>
              <img className="d-block w-100" src="/images/hero2b.jpg" alt="Second slide" />
              <div className="carousel-caption">
                    <h3 className="animated fadeInDown hero-text">Lorem Ipsum Lorem Ipsum</h3>
                    <a href="#data"><button className="pull-left" type="button">Button</button></a>
              </div>

              <button type="button" className="envelope-wrap" data-toggle="modal" data-target="#myModal">
                <img className="envelope-icon" src="/images/envelope2.svg" alt="envelope icon"/>
              </button>
            </div>
            <div className="carousel-item">
              <div className="overlay"></div>
              <img className="d-block w-100" src="/images/hero3b.jpg" alt="Third slide" />
              <div className="carousel-caption">
                    <h3 className="animated fadeInDown hero-text">Lorem Ipsum Lorem Ipsum</h3>
                    <a href="#data"><button className="pull-left" type="button">Button</button></a>
              </div>
              <button type="button" className="envelope-wrap" data-toggle="modal" data-target="#myModal">
                <img className="envelope-icon" src="/images/envelope2.svg" alt="envelope icon"/>
              </button>
            </div>
          </div>

        </div>
      </header>

    );
  }
}

export default Header;
