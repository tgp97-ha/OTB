import React, {Component} from "react";
import {Link} from "react-router-dom";
import {browserHistory} from 'react-router';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    // button1= <Button to="/" onClick={this.toLocation('/')}>Tour</Button>
    // button2=  <Button className="nav-link" onClick={this.toLocation('/admin')}>
    //     Admin
    // </Button> button2=  <Button className="nav-link" onClick={this.toLocation('/admin')}>
    //     Admin
    // </Button>
    toLocation(location) {
        return browserHistory.push(location)
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                    <Link to="/" className="navbar-brand">React App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/tour">Tour</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    Admin
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tourist">Tourist</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;