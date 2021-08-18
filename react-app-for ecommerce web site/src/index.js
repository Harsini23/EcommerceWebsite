
import ReactDOM from "react-dom";
import React, { Component } from "react";
import Footer from "./Mycomponents/Footer";
import Header from "./Mycomponents/Header";
import Main from "./Mycomponents/Main";

class Myindex extends Component{
    render(){
    return(
    <React.Fragment>
    <Header/>
    <Main/>
    <Footer/>
    </React.Fragment>
    )
    }
}
ReactDOM.render(<Myindex/>,document.getElementById('root'));