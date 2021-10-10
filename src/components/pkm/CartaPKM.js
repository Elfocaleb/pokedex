import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColoriPKM from "./ColoriPKM";
import {catchIt, checkIt, releaseIt} from "./GestisciCollezionePKM";
import styled from 'styled-components';

import loader from '../pkm/pokeball.gif';
import searchicon from './search_icon.svg';

const PkmImage = styled.img`
    width: 100px;
    height: 100px;
`;



function CartaPKM(props) {
        const pkmName = props.name;
        const url = props.url;
        const pkmId= url.split("/")[url.split("/").length - 2];
        const pkmType= "fire";
        const pkmImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmId}.svg`;
        const [imageLoading, setimageLoading] = useState(true);
        const [gotIt, setgotIt] = useState(props.gotit);

    
    
    
    let bottone="";
        if (gotIt) {
          bottone = (
            <button className="iAmOut" onClick={() => {releaseIt(`${pkmId}`, `${pkmName}`); setgotIt(false)}}></button>
          );
        } else {
          bottone = (
            <button className="iAmIn" onClick={() => {catchIt(`${pkmId}`, `${pkmName}`);  setgotIt(true)}}></button>
          );
        }

    return (
        <div className={"col-6 col-md-4 col-lg-3 col-xl-2 " + (gotIt ? 'gotcha' : '')}>
            <div className="card">
                <div className={`card-header ${gotIt ? "gotcha" : ""}`}>
                    <span className="pkmID">
                        { pkmId }
                    </span>
                    {imageLoading ? (<img src={loader} className="pokespinner"/>) : null}
                    <PkmImage 
                        className="card-img-top" 
                        src={pkmImageUrl} 
                        alt={ pkmName } 
                        onLoad={() => setimageLoading(false)}
                        style = {
                            imageLoading ? null : {display: "block"}
                        }
                    />
                </div>
                <div className="pkmType"></div>
                <div className="card-body">
                <h5 className="card-title"><Link to={`pokemon/${pkmId}`}>{ pkmName }</Link></h5>
                  <Link to={`pokemon/${pkmId}`} className="btn-search"><img src={searchicon}/></Link>
                  {bottone}
                </div>
            </div>
        </div>
    )
    
}

export default CartaPKM;