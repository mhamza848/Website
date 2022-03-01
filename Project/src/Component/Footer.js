import react, { Component } from "react";

class Footer extends Component {
    render() {
        return(
            <footer id="foot">
                <div className="container" id="fote">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Corporate</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="col-md-4">					
                            <div className="footer-list">
                                <h4 className="town">Extra Links</h4>						
                                <ul>
                                    <ol>Home</ol>
                                    <ol>About Us</ol>
                                    <ol>Services</ol>
                                    <ol>News</ol>
                                </ul>
                                <ul>
                                    <ol>Careers</ol>
                                    <ol>Pages</ol>
                                    <ol>Shop</ol>
                                    <ol>Contact</ol>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <h6 className="go"><i className="fa fa-phone"></i> 6798-042-43-16</h6>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;