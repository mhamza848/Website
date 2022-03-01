import react, { Component } from "react";

class Header extends Component {
    render() {
        return (
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
							<li><a href="#" className="dps">Home</a></li>
							<li><a href="#" className="dps">About Us</a></li>
							<li><a href="#" className="dps">Services</a></li>
							<li><a href="#" className="dps">News</a></li>
							<li><a href="#" className="dps">Portfolio</a></li>
							<li><a href="#" className="dps">pages</a></li>
							<li><a href="#"  className="dps">Shop</a></li>
							<li><a href="#" className="dps">Contact</a></li>
						</ul>
					</nav>
					</div>
				</header>
			</div>
		</div>
	</section>
        )
    }
}
export default Header;