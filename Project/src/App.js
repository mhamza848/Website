import logo from './logo.svg';
import './App.css';

import {Routes, Route,Link} from 'react-router-dom';

import React, { Component } from 'react';
import TopNav from './Component/TopNav';
import Header from "./Component/Header";
import Expert from "./Component/Expert";
import Stop from "./Component/Stop";
import Box from "./Component/Box";
import CallSecton from "./Component/CallSecton";
import CenterB from "./Component/CenterB";
import BoxSnd from "./Component/BoxSnd";
import Hlo from "./Component/Hlo";
import Footer from "./Component/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <section id="school">
          <div className="container">
            <div className="row">
              <header>
                <div className="col-md-4">
                <h1 className="base">Corporate</h1>
                </div>
                <div className="col-md-8" style={{marginLeft: "-5px"}}>
                  <nav>
                  <ul>
                    <li><a href="/expert" className="dps">Home</a></li>
                    <li><a href="/stop" className="dps">About Us</a></li>
                    <li><a href="/box" className="dps">Services</a></li>
                    <li><a href="/callsection" className="dps">News</a></li>
                    <li><a href="/centerb" className="dps">Portfolio</a></li>
                    <li><a href="/boxsnd" className="dps">pages</a></li>
                    <li><a href="/hlo"  className="dps">Shop</a></li>
                    <li><a href="/footer" className="dps">Contact</a></li>
                  </ul>
                </nav>
                </div>
              </header>
            </div>
          </div>
        </section>
        <Routes>
        <Route path="/footer" element={<TopNav />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/stop" element={<Stop />} />
          <Route path="/box" element={<Box />} />
          <Route path="/callsection" element={<CallSecton />} />
          <Route path="/centerb" element={<CenterB />} />
          <Route path="/boxsnd" element={<BoxSnd />} />
          <Route path="/hlo" element={<Hlo />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    );
  }
}

export default App;
