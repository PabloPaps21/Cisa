import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Ver from './components/Ver/Ver';
import Ingenierias from './components/Ingenierias/Ingenierias'
import Tecnicos from './components/Tecnicos/Tecnicos';
import AdminEsp from './components/AdminEsp/AdminEsp';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Nav } from 'react-bootstrap';
import './components/Main/main.css';

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact component={Main} path="/" />
            <Route exact component={Ver} path="/ver" />
            <Route exact component={Ingenierias} path="/ingenierias" />
            <Route exact component={Tecnicos} path="/tecnico" />
            <Route exact component={AdminEsp} path="/adminEsp" />
            
        </Switch>
        <Footer />
    </BrowserRouter>
)
export default Router;