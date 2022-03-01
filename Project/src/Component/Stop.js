import react, { Component } from "react";

class Stop extends Component {
    render() {
        return(
            <section id="stop">
                <div className="container" id="run">
                    <h1><u> Our Services </u></h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box"></div>
                                <div className="content">
                                    <h2 className="sun">Sales Coaching</h2>
                                    <p>Fusce vitae commodo purus. Mauris aliquit ornare sem, sed imperdiet augue.</p>
                                </div>
                            </div>
                        <div className="col-md-4">
                            <div className="box"></div>
                                <div className="content">
                                    <h2 className="sun">Sales Coaching</h2>
                                    <p>Fusce vitae commodo purus. Mauris aliquit ornare sem, sed imperdiet augue.</p>
                                </div>
                            </div>
                        <div className="col-md-4">
                            <div className="box"></div>
                                <div className="content">
                                    <h2 className="sun">Sales Coaching</h2>
                                    <p>Fusce vitae commodo purus. Mauris aliquit ornare sem, sed imperdiet augue.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Stop;