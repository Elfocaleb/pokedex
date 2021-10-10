import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { colorType } from './ColoriPKM';
import {catchIt, checkIt, releaseIt} from "./GestisciCollezionePKM";
import { useParams } from 'react-router-dom';
import loader from '../pkm/pokeball.gif';
import { Link } from 'react-router-dom';

// valori massimi - valori recuperati online ma non necessariamente veritieri - richiede verifica
const maxvalues = {
    hp : 255,
    atk: 190,
    def: 230,
    spd: 200,
    satk: 180,
    sdef: 230
}

export default function SchedaPKM(props) {
    const {pkmId} = useParams()
    const [pkmName, setpkmName] = useState("");
    const [pkmImage, setpkmImage] = useState(loader );
    
    const [pkmTypes, setpkmTypes] = useState([]);
    const [pkmAbilities, setpkmAbilities] = useState([]);
    const [pkmText, setpkmText] = useState("");
    const [pkmStats, setpkmStats] = useState({}); 
    const [pkmEvolutions, setpkmEvolutions] = useState("");
    const [imageLoading, setimageLoading] = useState(true);
    const [gotIt, setgotIt] = useState(false);  
    
   
    
    
    const richiestaPokemon = `https://pokeapi.co/api/v2/pokemon/${pkmId}/`;
    const richiestaSpecies = `https://pokeapi.co/api/v2/pokemon-species/${pkmId}/`;
    

    
   
    
    
    const [dataPKM, setDataPKM] = useState([]);
    // ----------- Chiamata all'api per nome
    useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get(richiestaPokemon);
                setDataPKM(response.data);
                setpkmName(response.data.name);
                setpkmImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pkmId}.svg`)
                setpkmTypes(response.data.types.map(type => type.type.name));
                setpkmAbilities(response.data.abilities.map(ability => ability.ability.name));
                setpkmStats(response.data.stats) 
                setgotIt(checkIt(`${pkmId}`));
            }
            
        fetchData();
        }, [pkmId]);
         
         
         
    const [dataSpecies, setDataSpecies] = useState([]);
    // ----------- Chiamata all'api per nome
    useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get(richiestaSpecies);
                setDataSpecies(response.data);
                setpkmText(response.data.flavor_text_entries.filter(flavor => flavor.language.name==='en')[0].flavor_text.replace('\f','\n').replace('\u00ad\n','').replace('\u00ad','').replace(' -\n',' - ').replace('-\n','-').replace('\n',' '));
        }
            
        fetchData();
        }, [pkmId]);
         
             
                
                
                
             
                
                
                
                
                
                
                
                
                
                
                
                
                

        
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
        
        
         // definisco il colore di sfondo del box immagine
       
        let finalColor;
        if (pkmTypes.length === 2) {
            finalColor = colorType(pkmTypes[0], pkmTypes[1]);
        } else {
            finalColor = colorType(pkmTypes[0]);
        }
        
        
        return (
            <div className="schedaPKM">
                <div className="row changescheda">
                    <Link to={`${parseInt(pkmId)===1? 151 : parseInt(pkmId)-1}`} className="btn btn-primary btn-sm">prev</Link>
                    <Link to={`${parseInt(pkmId)===151? 1 : parseInt(pkmId)+1}`} className="btn btn-primary btn-sm">next</Link>
                </div>
                <div className={`row topbox ${gotIt ? "gotcha" : ""}`}>
                    <div className="col-sm-6 imagebox"
                    style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }}
> 
                        <img src={pkmImage} alt={pkmName} />
                    </div>
                    <div className="col-sm-6 basebox">
                        <p className="pkmId"># {pkmId}</p>
                        <h2>{pkmName}</h2>
                        <div className="types">
                        {pkmTypes.map(type =>(
                                <span className="badge badge-primary"
                        style={{backgroundColor: `${colorType(type)[0]}`}}
                                    >{type}</span>
                        ) )}
                        </div>

                        {bottone}
                    </div>
                </div>
                <div className="statsbox container">
                <p className="pkmDescription">{pkmText}</p>
                <ul className="pkmAbilities">{pkmAbilities.map(ability =>(<li key="{ ability }">{ ability }</li>))}</ul>
                {
                Array.from(pkmStats).map(stat => {
                        
                   return <div className="row row-stat">
                   
                        <div className="col-6 col-sm-4 col-lg-3 statlabel">
                        {stat.stat.name.replace("-", " ").toUpperCase()}: <span className="valutazione"> {stat.base_stat} </span>
                        </div>
                        <div className="progress col-6 col-sm-8 col-lg-9">
                            <div className="progress-bar progress-bar-success" role="progressbar"  style={{width:`${stat.base_stat *100 / maxvalues['satk'] +'%'}`}}>
                            </div>
                        </div>
                    </div>
                
                })
                
                
                
               }
                    

    
                </div>
            </div>
            
        )
    
}