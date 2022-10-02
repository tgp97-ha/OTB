import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./main/NavBar";
import {BrowserRouter, Route} from 'react-router-dom';
import AdminHome from "./pages/Admin/Home";
import TourHome from "./pages/Tour/Home";
import TouristHome from "./pages/Tourist/Home";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import stores from '../redux/reducers/index'

let store = createStore(stores);

class MyApp extends Component{

    render() {
        return (<div className="container">
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route path="/tourist" component={TouristHome}/>
                    <Route path="/admin" component={AdminHome}/>
                    <Route path="/tour" component={TourHome}/>
                </div>
            </BrowserRouter>
        </div>)
    }

}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(<Provider store={store}><MyApp/></Provider>, document.getElementById('app'));
}
