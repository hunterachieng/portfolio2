import React from 'react';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <hr className="divider"/>
            <h2 >Contact</h2>
            <p>Lets get in touch through:</p>
            <div className="icons">
            <button><i className="fab fa-github"></i></button>
            <button><i className="fab fa-twitter"></i></button>
            <button><i className="fab fa-linkedin"></i></button>
            <button><i className="far fa-envelope"></i></button>
            <Link to ="#home" scroll={el=>el.scrollIntoView({behavior:"smooth", block: "start"})}>
            <button className="top"><i className="fas fa-arrow-circle-up"></i></button>
            <p className="top2">Back to Top</p>
            </Link>
           
            <Footer />
        </div>
        </div>
    )
}