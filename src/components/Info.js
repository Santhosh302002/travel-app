import React from "react";
import  ReactDOM from "react";
import Img from '../index.css';
import  '../img/download.jpg';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
export default function place(props){
    console.log(`../img/${props.img}`)

    return(
        
        <section className="place">
        <main className="card">

                <div className="shadow"><img src={require(`../img/${props.img}`)} className="Img-card"/></div>
            <div className="card-banner">
                <div className="locat-icon">
                <FontAwesomeIcon icon={faLocationDot} className="icon-card"></FontAwesomeIcon>
                <p>{props.place}</p>
                <p className="view-card">{props.view}</p>
                </div>
                {/* <div className="location">
                    <p>Japan</p>
                </div> */}
            </div>
            <p className="Name-card">{props.location}</p>   
            <p className="content-card">{props.info}</p>
        </main>
            {/* <div className="line">
                
            </div> */}
        </section>
    );
}