 import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <section id="same">
                <div className="container" id="unsame">
                    <h1 className="fly"><u> Why Choose Us</u></h1>
                    <div className="row">
                        <div className="col-md-3">
                            <h5><i className="glyphicon glyphicon-bullhorn" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

                            <h5><i className="glyphicon glyphicon-sunglasses" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </div>

                        <div className="col-md-3">
                            <h5><i className="glyphicon glyphicon-blackboard" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

                            <h5><i className="fa fa-sitemap" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </div>

                        <div className="col-md-3">
                            <h5><i className="glyphicon glyphicon-home" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

                            <h5><i className="glyphicon glyphicon-usd" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </div>

                        <div className="col-md-3">
                            <h5><i className="glyphicon glyphicon-signal" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

                            <h5><i className="glyphicon glyphicon-briefcase" style={{fontSize: "25px"}}></i> Great Ideas For You</h5>
                            <p className="chair">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </div>


                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Box;