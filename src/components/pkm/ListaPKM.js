import React, { useState, useEffect  } from 'react';
import CartaPKM from "./CartaPKM";
import {checkIt} from "./GestisciCollezionePKM";
import axios from 'axios';
import StatsBar from "../layout/StatsBar";

export default function ElencoPKM() {
    // Lo State indica la parte "variabile" di un component, che aggiornerà reattivamente la UI    
    
        
    const richiestaElenco = 'https://pokeapi.co/api/v2/pokemon?limit=151';
   
   
  
    const [pokemon, setPokemon] = useState(null);
    useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get(richiestaElenco);
                setPokemon(response.data.results);
                
            }  
        fetchData();
    }, []);
   

    return (
        <><StatsBar />  
        <div id="gridview" className="row">
            { pokemon && Array.from(pokemon).map(pokemon => (
                    <CartaPKM 
                       key={pokemon.url.split("/")[pokemon.url.split("/").length - 2]}
                       name={pokemon.name} 
                       url={pokemon.url} 
                       type={pokemon.types}
                       gotit={checkIt(pokemon.url.split("/")[pokemon.url.split("/").length - 2])}
                    />
                 ))
            }
        </div></>
    )
    
}