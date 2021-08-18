import React,{Component} from 'react';
import './Footer.css';
import {mydata} from '../data';
//import { Link } from 'react-router-dom'; 
import { SocialIcon } from 'react-social-icons';

class Footer extends Component{
render(){
    
    return( <div>

            <div className='beforefooter'>
           
            <button id="myBtn" title="Go to top">Back to top</button>
            </div>

            <div className="footerbg" id="abtus">

            <fieldset>
            <legend><div  id="abtus">About us:</div>
            </legend>

            <div className="gridcontainer">

            <div className="griditem"> 
            
            <div class="flip-card-inner">
            <div class="flip-card-front">
            </div>
            <div class="flip-card-back">
            <h1>CEO of Bubble</h1> 
            {mydata.map((myval)=>(<p key={myval}> {myval.CEO} </p>))}
            </div>
            </div>

            
            </div>

            <div className="griditem">

            <div class="flip-card-inner">
            <div class="flip-card-front" id="sec">
            </div>
            <div class="flip-card-back" >
            <h1>COO of Bubble</h1> 
            {mydata.map((myval)=>(<p key={myval}> {myval.COO} </p>))}
            </div>
            </div>

            </div>
            <div className="griditem">{mydata.map((myval)=>(<p key={myval}> {myval.aboutus} </p>))}</div>
            </div>
            </fieldset>
          
            <div className="box">  
            
            <ul classname="b1">
            <h5>Download Our App</h5>
                    <li>Available for Android and iOS</li>
                    <li>Privacy policy</li>
                    <li>Get to know us</li>
                </ul> 
            <ul classname="b1">
                <h5>Useful links</h5>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                    <li>Get to know us</li> 
            </ul> 
            <ul classname="b1">
                <h5>Social Media</h5>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
            </ul> 
            </div>

                <hr class="solid"></hr>
                <div class="bottom">
                <small class='website-rights'>Copyright © 2021 - MyEcommerce</small>
               <div className="space"> <SocialIcon url="https://twitter.com" target="_blank" /></div>
               <div className="space"> <SocialIcon url="https://www.linkedin.com"  target="_blank"/></div>
               <div className="space">  <SocialIcon url="https://www.instagram.com"  target="_blank"/></div>
               <div className="space"> <SocialIcon url="https://www.youtube.com"  target="_blank"/></div>
               <div className="space"><SocialIcon url="https://www.facebook.com" target="_blank"/></div>
               </div>
    
            </div>
           

        </div>);
}


}
export default Footer;

