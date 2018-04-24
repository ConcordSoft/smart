import React, { Component } from 'react';
import { Carousel  } from 'react-bootstrap';


import skechersHead from '../component/images/skechers-head.jpg';
import bicNaslovna from '../component/images/bic-naslovna1.jpg';
import ksNaslovna from '../component/images/ks-naslovna.jpg';
import dokFirst from '../component/images/dok-first.jpg';
import zbNaslovna from '../component/images/zb-naslovna.jpg';
import epFirst from '../component/images/ep-first.jpg';

var skechersHeadImg = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  backgroundImage: `url(${skechersHead})`
};

var bicNaslovnaImg = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  backgroundImage: `url(${bicNaslovna})`
};

var ksNaslovnaImg = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  backgroundImage: `url(${ksNaslovna})`
};

var dokFirstImg = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  backgroundImage: `url(${dokFirst})`
};

var zbNaslovnaImg = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  backgroundImage: `url(${zbNaslovna})`
};

var epFirstImg = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "100vh",
  backgroundImage: `url(${epFirst})`
};



export default class Home extends Component {

  render () {                                   
    return (
      <Carousel>
        <Carousel.Item>
          <a  href="/bic" 
              className="intro-thumb col-md-4 col-sm-4 home-item-slide">
                <div style={ skechersHeadImg }></div>
              </a>
          <a  href="/bic" 
              className="intro-thumb col-md-4 col-sm-4 home-item-slide" >
                <div style={ bicNaslovnaImg }></div>
              </a>
          <a  hrefName="/" 
              class="intro-thumb col-md-4 col-sm-4 home-item-slide">
                <div style={ ksNaslovnaImg }></div>
              </a>
        </Carousel.Item>

        <Carousel.Item>
          <a  href="/" 
              className="intro-thumb col-md-4 col-sm-4 home-item-slide">
                <div style={ dokFirstImg }></div>
              </a>
          <a  href="/" 
              className="intro-thumb col-md-4 col-sm-4 home-item-slide" >
                <div style={ zbNaslovnaImg }></div>
              </a>
          <a  hrefName="/" 
              class="intro-thumb col-md-4 col-sm-4 home-item-slide">
                <div style={ epFirstImg }></div>
              </a>
        </Carousel.Item>
      </Carousel>
    )
  }
}