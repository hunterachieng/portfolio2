import React from 'react';
import woman from './images/vector.jpg';
import { Link } from 'react-router-dom';

export default function Bio(){
    return(
        
        <div className="bio" id="bio">
        <h2>My Bio</h2>
        <p>Hello, I am Hunter Achieng, a Sofware Engineer  from Nairobi, Kenya.<br/>
I have always been curious about the world. Why does this work like this?<br/>
This has been the question on my mind for years. This curiosity led me to <br/>
pursue a career in tech where I create the systems that were an anomalie<br/>
during my childhood. <br/>
I believe that we can make great change to the world through technology <br/>
if used correctly.<br/>
When I am not seated in front of a computer, I am busy learning new <br/>
languages and searching for more ‘How Its Made’ shows.</p>
<div className="skills">
<p className="skill"><b>Skills</b></p>
<ul>
<li>JavaScript</li>
<li>Kotlin</li>
<li>React.js</li>
<li>Node.js</li>
<li>Python</li>
<li>Django</li>
</ul>
</div>
<img src={woman} alt="illustration" className="code"/>
<Link to="/files/resume.pdf" target="_blank" style={{textDecoration:"none"}} download><button>Download Resume</button></Link>

        </div>
    )
}