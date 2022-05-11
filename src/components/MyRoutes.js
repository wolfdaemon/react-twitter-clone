import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Navbar from './Navbar';
// import ReactDOM from 'react-dom/client';

//webpages
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Meta from "./pages/Meta";

class MyRoutes extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/meta" element={<Meta />} />
                    </Routes>
                </div>
            </Router>
        );
    }

}

export default MyRoutes;