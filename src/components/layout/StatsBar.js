import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import filtericon from './filter-icon.svg';
import searchicon from './search-icon.svg';
import axios from 'axios';

function collectionFilter(filtro){
    let gridview = document.getElementById("gridview");
    let filter_have = document.getElementById("filter_have");
    let filter_not = document.getElementById("filter_not");
    if(filtro === "celo") {
        gridview.classList.add("solo_gotcha");
        if(gridview.classList.contains("solo_missing")) {gridview.classList.remove("solo_missing")}
        if(filter_have.classList.contains("selected")===false) {filter_have.classList.add("selected")}
        if(filter_not.classList.contains("selected")) {filter_not.classList.remove("selected")}
    } else if(filtro === "manca") {
        gridview.classList.add("solo_missing");
        if(gridview.classList.contains("solo_gotcha")) {gridview.classList.remove("solo_gotcha")}
        if(filter_have.classList.contains("selected")) {filter_have.classList.remove("selected")}
        if(filter_not.classList.contains("selected")===false) {filter_not.classList.add("selected")}
    } else {
        if(gridview.classList.contains("solo_gotcha")) {gridview.classList.remove("solo_gotcha")}
        if(gridview.classList.contains("solo_missing")) {gridview.classList.remove("solo_missing")}
        if(filter_have.classList.contains("selected")) {filter_have.classList.remove("selected")}
        if(filter_not.classList.contains("selected")) {filter_not.classList.remove("selected")}
    }
}
   
   
  export default function StatsBar() { 

  const [error, setError] = useState(null); 
  
  
  const [primorender, setPrimorender] = useState(true);
  const [pokemonrichiesto, setPokemonrichiesto] = useState("");
    useEffect(() =>{
        if (primorender === false) {
            const fetchData = async () => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonrichiesto}`)
                setPokemonrichiesto(response.data);
                }  
            fetchData();
        } else {
            setPrimorender(false);
        }
    }, [pokemonrichiesto]);
   
   
   const filtraPokemon = () => {
       let ricerca = document.getElementById("searchfield").value;
       // bonifica della stringa inserita: elimino tutti i caratteri speciali (ad eccezione di -), rendo tutti i caratteri minuscoli e sostituisco gli spazi con i trattin
       let finalString =  ricerca.replace(/[&\/\\#^+()£_=§°|$~%.'":*?<>{}!@]/g, '').toLowerCase().replace(" ", "-");
      setPokemonrichiesto(finalString)
       
   }
   
   console.log(pokemonrichiesto);

    return (
        <React.Fragment>

            <div className="row statsbar"> 
                <div className="col-sm-12 col-md-9" id="filtersbox">
                    <img src={filtericon} alt="filter" id="filtericon" />
                    <button onClick={()=> collectionFilter("celo")} id="filter_have"> Gotcha ones</button> 
                    <button onClick={()=> collectionFilter("manca")} id="filter_not"> Missin' ones</button>    
                    <button onClick={()=> collectionFilter("all")} id="filter_alle"> Give 'em all</button> 
                </div>
                <div id="searchbox" className="col-sm-12 col-md-3" >
                <input type="text" id="searchfield" />
                <button onClick={() => filtraPokemon()}><img src={searchicon} alt="filter" id="searchicon" /></button>
                </div>
            </div>
            <div className="row erroreAPI">
                <div className="col-12">
                { pokemonrichiesto.id > 0 ?  <p> TO:DO - Pokemon trovato, <Link to={`pokemon/${pokemonrichiesto.id}`}>vai alla scheda!</Link> </p> : <p> Not Found </p> }
                </div>
            </div>
        </React.Fragment>
    )
}
