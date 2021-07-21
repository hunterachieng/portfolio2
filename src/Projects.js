import React from 'react';
import {Link }from 'react-router-dom';
import green from './images/project1.PNG';
import reviews from './images/project3.PNG';
import madlibs from './images/projects.PNG';

export default function Projects(){
    return(
        <div className="Project" id="project">
            <h2>Projects</h2>
        <div className="projects">
            <img src={green} alt = "green"/>
            <img src={reviews} alt = "reviews"/>
            <img src={madlibs} alt = "madlibs"/>           
        </div>
        <div className="names">
        <Link to ={{pathname:"https://hunter-green-js.netlify.app"}}target="_blank"style={{textDecoration:"none"}}>
            <p>E-commerce</p></Link>
           <Link to={{pathname:"https://hunter-reviews-jsproject.netlify.app"}} target="_blank" style={{textDecoration:"none"}}>
               <p>Customer Reviews</p></Link>
            <Link to={{pathname:"https://hunter-madlibs-js.netlify.app"}} target="_blank" style={{textDecoration:"none"}}>
                <p>Madlibs</p></Link>
        </div>
        </div>
    )
}