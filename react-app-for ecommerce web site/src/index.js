
import ReactDOM from "react-dom";
import React from "react";
import Footer from "./Mycomponents/Footer";
import Header from "./Mycomponents/Header";
import Main from "./Mycomponents/Main";

function Myindex(){
    return(
    <React.Fragment>
    <Header/>
    <Main/>
    <Footer/>
    </React.Fragment>
    )
}
ReactDOM.render(<Myindex/>,document.getElementById('root'));