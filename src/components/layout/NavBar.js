import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
export default function NavBar() {
   
    
   
    return (
        <div>
            <nav id="mainnav" className="navbar navbar-expand-md fixed-top">
                <Link to={`../`} className="navbar-brand"><img src={logo} alt="Pokedex" id="logo" /></Link>
                   
            </nav>
        </div>
    )
    
}