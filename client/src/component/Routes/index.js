import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import Navbar from '../Navbar';

const index = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Route path="/profil" exact component={Profil} />
                <Route path="/trending" exact component={Trending} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Router>
        </div>

    );
};

export default index;