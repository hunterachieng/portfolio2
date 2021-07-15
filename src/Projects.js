import React from 'react';
import green from './images/project1.PNG';
import reviews from './images/project3.PNG';
import madlibs from './images/projects.PNG';

export default function Projects(){
    return(
        <div className="Project">
            <h2>Projects</h2>
        <div className="projects">
            <img src={green} alt = "green"/>
            <img src={reviews} alt = "reviews"/>
            <img src={madlibs} alt = "madlibs"/>           
        </div>
        <div className="names">
        <p>E-commerce</p>
            <p>Customer Reviews</p>
            <p>Madlibs</p>
        </div>
        </div>
    )
}