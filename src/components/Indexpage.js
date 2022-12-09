import React from "react";
import  ReactDOM from "react";
import '../index.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons'
import Info from './Info';

export default function page(){
    return(
        <section className="Banner">
            <nav className="nav-bar">
                <FontAwesomeIcon icon={faEarthAmericas} className="nav-icon"></FontAwesomeIcon>
                <p className="nav-title">My Travel</p>
            </nav>
            
        </section>
    );
}
