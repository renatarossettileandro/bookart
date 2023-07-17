import React from 'react';
import { useState } from 'react';
import { Sports } from './sports';
import { Arts } from './arts';
import { Tec } from './tec';
import { History } from './history';


export const Trend = () => {

    const [ativoSports, setAtivoSports] = useState(true);
    const [ativoArts, setAtivoArts] = useState(false);
    const [ativoTec, setAtivoTec] = useState(false);
    const [ativoHis, setAtivoHis] = useState(false);

    const handleClickSports = () => {
        setAtivoSports(true);
        setAtivoArts(false);
        setAtivoTec(false);
        setAtivoHis(false);
    }

    const handleClickArts = () => {
        setAtivoSports(false);
        setAtivoArts(true);
        setAtivoTec(false);
        setAtivoHis(false);

    }

    const handleClickTec = () =>{
        setAtivoSports(false);
        setAtivoArts(false);
        setAtivoTec(true);
        setAtivoHis(false);

    }

    const handleClickHistory = () => {
        setAtivoSports(false);
        setAtivoArts(false);
        setAtivoTec(false);
        setAtivoHis(true);
    }



    return(
        <div>
            <div className='Container'>
                <h1>Trending Books</h1>
            </div>
            <div className='Container'>
                <button onClick={handleClickSports}>Sports</button>
                <button onClick={handleClickArts}>Arts</button>
                <button onClick={handleClickTec}>Tecnology</button>
                <button onClick={handleClickHistory}>History</button>
            </div>
            <div>
                {ativoSports && <Sports />}
                {ativoArts && <Arts />}
                {ativoTec && <Tec />}
                {ativoHis && <History />}
            </div>
           
        
        </div>
    )
}
