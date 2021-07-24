import React, {useState, useEffect} from 'react';

export default function ScrollToTop(){
    const [isScrollVisible, setScroll] = useState(false);

    //show button when scrolled  to a certain distance
    const toggleVisibility = ()=> window.pageYOffset > 150?setScroll(true):setScroll(false);
    //set top cordinate to 0
    //make scrolling smooth
    const scrollToTop = () => {window.scrollTo({top:0,behavior:"smooth"})}

    //whenever the page loads
    useEffect(()=> {window.addEventListener("scroll",toggleVisibility);},[]);
    return(
        <div className="scroll">
        {isScrollVisible &&
        <button className="top" onClick={scrollToTop}><i className="fas fa-arrow-circle-up"></i></button>
        }
        </div>

    )
}