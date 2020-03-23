import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';


const Header = () => {
    return(
        <>
        <Switch>
            <Route path="/" exact render={()=>(
                <img src={img1}/>
            )}/>

            <Route path="/products" render={()=>(
                <img src={img2}/>
            )}/>

            <Route path="/contact" render={()=>(
                <img src={img3}/>
            )}/>

            <Route path="/admin" render={()=>(
                <img src={img1}/>
            )}/>

            <Route render={()=>(
                <img src={img1}/>
            )}/>
        </Switch>
        </>
    );

}

export default Header;