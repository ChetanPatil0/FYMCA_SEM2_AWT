import React from "react";
import "./index.css";
function nav_bar(props){
    return(
        <>
           <section className="nav">
            <div className="logo">
                <img src="Images/logo.svg" alt="logo" width={'150px'}/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="#">Notice</a></li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default nav_bar;