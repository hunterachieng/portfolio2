import React from 'react';
import Footer from './Footer';

export default function Contact(){
    return(
        <div className="contact">
            <hr className="divider"/>
            <h2 >Contact</h2>
            <p>Lets get in touch through:</p>
            <div className="icons">
            <button><i class="fab fa-github"></i></button>
            <button><i class="fab fa-twitter"></i></button>
            <button><i class="fab fa-linkedin"></i></button>
            <button><i class="far fa-envelope"></i></button>
            <Footer />
        </div>
        </div>
    )
}