import React from 'react';
//components
// import SideNav from './SideNav';
import Navbar from './Navbar';
// import SplitText from './SplitText';

export default function Home(){
    return(
        <div className="home" id="home">
            <Navbar/>
                           

        <div className="intro">
        <p> Synthia Hunter Achieng</p>
       <hr/>
        <p className="role">Software Engineer</p>
        </div>
    
        </div>
    )
}