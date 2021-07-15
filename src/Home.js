import React from 'react';


//components
import Navbar from './Navbar';
// import SideNav from './SideNav';

export default function Home(){
    return(
        <div className="home">
         <Navbar/>
         

        <div className="intro">
        <p> Synthia Hunter Achieng</p>
       <hr/>
        <p className="role">Software Engineer</p>
        </div>
    
        </div>
    )
}