import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar(){
    return(
        <div>
             <nav className="nav-bar">
        <ul className="nav-list">
        <Link to ="#home" scroll={el=>el.scrollIntoView({behavior:"smooth", block: "start"})}> <li>Home</li></Link>
          <Link to="#bio"scroll={el=>el.scrollIntoView({behavior:"smooth", block: "center"})}><li>Bio</li></Link>
           <Link to="#project" scroll={el=>el.scrollIntoView({behavior:"smooth", block: "center"})}><li>Projects</li></Link>
          <Link to= "#contact" scroll={el=>el.scrollIntoView({behavior:"smooth", block: "center"})}><li>Contact</li></Link>
        </ul>
        </nav>
        </div>
    )
}