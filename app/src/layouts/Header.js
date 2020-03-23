import React from 'react';
import '../styles/Header.css';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';


const Header = () => {
    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * 3);
    const srcImg = images[index];

    console.log(index);
    console.log(srcImg);

    return(
        <img src={srcImg} alt="krajobraz"/>
    );

}

export default Header;