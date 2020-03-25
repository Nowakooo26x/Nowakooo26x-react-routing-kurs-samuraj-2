import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../styles/Header.css';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';


const Header = () => {
    return(
        <>
        <img src={img1} alt="krajobraz"/>
        <Switch>
            <Route path="/" exact render={()=>(
                <img src={img1} alt="krajobraz"/>
            )}/>

            <Route path="/products" render={()=>(
                <img src={img2} alt="krajobraz"/>
            )}/>

            <Route path="/contact" render={()=>(
                <img src={img3} alt="krajobraz"/>
            )}/>

            <Route path="/admin" render={()=>(
                <img src={img1} alt="krajobraz"/>
            )}/>

            <Route render={()=>(
                <img src={img1} alt="krajobraz"/>
            )}/>
        </Switch>
        </>
    )
}

export default Header;