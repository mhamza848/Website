import React, { Component } from 'react';

class CallSecton extends Component { 
    render() { 
        return(
            <section id="main">
                <div className="container" id="umain">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <h3 className="call">Request a call back</h3>
                            <p className="sit">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore sit amet, consecteture adipiscing elit.</p>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputName3" placeholder="Your Name" />
                            </div>
            
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputName4" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputName5" placeholder="Your Name" />
                            </div>
            
                            <button className="subm">Submit</button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>
        ); 
    } 
} 
export default CallSecton;