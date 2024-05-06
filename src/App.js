import React from "react";
import "./App.css";
import Navbar from "./nav.jsx";
import {Section1,Section2,Section3,Footer} from "./section1.jsx";


function App(){
       return(
        <>
        <Navbar></Navbar>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Footer></Footer>
        </>
       )
}
  

export default App;