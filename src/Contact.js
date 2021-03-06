import React from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom';

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <hr className="divider"/>
            <h2 >Contact</h2>
            <p>Let's get in touch through:</p>
            <div className="icons">
           <Link to={{pathname:"https://github.com/hunterachieng"}}target="_blank" style={{textDecoration:"none"}}>
               <button><i className="fab fa-github"></i></button></Link>
            <Link to={{pathname:"https://twitter.com/AchiengHunter"}} target="_blank" style={{textDecoration:"none"}}>
                <button><i className="fab fa-twitter"></i></button></Link>
            <Link to={{pathname:"https://www.linkedin.com/in/synthia-hunter-achieng-7963a820b/"}}target="_blank"style={{textDecoration:"none"}}>
                <button><i className="fab fa-linkedin"></i></button></Link>
            <Link to={{pathname:"achienghunter@gmail.com"}}target="_blank"style={{textDecoration:"none"}}>
                <button><i className="far fa-envelope"></i></button></Link>
           
           
            <Footer />
        </div>
        </div>
    )
}