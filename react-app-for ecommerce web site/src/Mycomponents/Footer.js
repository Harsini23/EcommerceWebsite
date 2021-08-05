import React from 'react';
import './Footer.css';
function Footer (){
    return(
        <>
        <div className='beforefooter'>
        </div>
        <div className="footerbg">
            <h2>About us</h2>
            <p>We are aspiring engineering students learning to create a react app to build a e-commerce 
                website. </p>
                <h2>Follow us</h2>
             <ul>
                 <li><a href="https://www.linkedin.com" target="_blank">LinkedIn page</a></li>
                 <li><a href="https://www.facebook.com" target="_blank">Facebook page</a></li>
                 <li><a href="https://github.com" target="_blank">Github page</a></li>
            </ul>    
        </div>
        </>
    )
}
export default Footer;