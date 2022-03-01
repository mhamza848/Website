import react, { Component } from "react";

class TopNav extends Component {
    render() {
        return(
            <section id="topnav">
                <div className="container" id="top">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 style={{cursor: "pointer"}}><i className="fa fa-clock-o"></i> Mon - Sat 8:00 am - 8:00 pm. Sunday CLOSED</h3>
                        </div>
                        <div className="col-md-4">
                            <h3 style={{cursor: "pointer"}}><i className="fa fa-map-marker"></i> 18th Floor, 379 Hudson Street, NY 10018 US</h3>
                        </div>
                        <div className="col-md-3">
                            <h3 style={{cursor: "pointer"}}><i className="fa fa-phone"></i> 212 386 5575</h3>
                        </div>
                        <div className="col-md-2">					
                            <div className="shoe">
                                <a href="#" className="shoe"><i className="fa fa-facebook-square"></i></a>
                                <a href="#" className="shoe"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="shoe"><i className="fa fa-linkedin-square"></i></a>
                                <a href="#" className="shoe"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="shoe"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}export default TopNav;