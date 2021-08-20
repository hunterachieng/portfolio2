import React from 'react';
import {Link }from 'react-router-dom';
import chat from './images/project1.jpg';
import todo from './images/project3.png';
import system from './images/projects.jpg';

export default function Projects(){
    return(
        <div className="Project" id="project">
            <h2>Projects</h2>
        <div className="projects">
            <img src={chat} alt = "chat"/>
            <img src={todo} alt = "todo"/>
            <img src={system} alt = "system"/>           
        </div>
        <div className="names">
        <Link to ={{pathname:"https://hunters-messaging-app.netlify.app/"}}target="_blank"style={{textDecoration:"none"}}>
            <p>Messaging App</p></Link>
           <Link to={{pathname:"https://hunter-todo-list.netlify.app/"}} target="_blank" style={{textDecoration:"none"}}>
               <p>To-Do List</p></Link>
            <Link to={{pathname:"https://github.com/hunterachieng/school_system"}} target="_blank" style={{textDecoration:"none"}}>
                <p>School System</p></Link>
        </div>
        </div>
    )
}