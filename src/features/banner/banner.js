import React from "react";
import { useState } from "react";
import iconnext from '../image/next.png';
import iconback from '../image/back.png';

export const Banner = () => {
    const banners = ['Capa1', 'Capa2'];
    const titulo1 = ['Flat 50% Discount', 'Flat 30% Discount'];
    const titulo2 = ['Find All Books For All Ages', 'Treding Street Style Books'];

    const [display, setDisplay] = useState(banners[0]);
    const [ primeiroTitulo, setPrimeiroTitulo ] = useState(titulo1[0]);
    const [segundoTitulo, setSegundoTitulo] = useState(titulo2[0]);


    const handleClick= () => {
        const newBanner = display === banners[0] ? banners[1] : banners[0];
        const newTitulo1 = primeiroTitulo === titulo1[0] ? titulo1[1] : titulo1[0];
        const newTitulo2 = segundoTitulo === titulo2[0] ? titulo2[1] : titulo2[0];
        setDisplay(newBanner);
        setPrimeiroTitulo(newTitulo1);
        setSegundoTitulo(newTitulo2);
    }

    return(
        <div className={display + ' Banner'}>
            <img src={iconback} className="Icon2" onClick={handleClick} alt="back"></img>
            <div className="Content AnimatedTitle">
                <h3>{primeiroTitulo}</h3>
                <h4>{segundoTitulo}</h4>
                <p>There are many variations of passages of Lorem Ipsum available<br></br> but the majority have suffered alteration.</p>
                <button>SHOP NOW</button>
                
            </div>
            <img src={iconnext} className="Icon" onClick={handleClick} alt='next'></img>

        </div>
    ) 
}