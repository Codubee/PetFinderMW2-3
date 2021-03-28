import React from 'react';
import '../style/featstyle.css';
import img1 from '../images/puppy.jpeg';
import img2 from '../images/shelter.jpg';

function Features(){
    return(
        <div>
                
            <div id = "border">

                <h1 id ="title" >Features</h1>
                <br></br>
                <p id = "text">• Matching you with a shelter animal.</p>
                <p id = "text">• Connecting you to an animal shelter.</p> 

            </div>
            <div id = "margin">
            <img src = {img1} id = "image" alt = " "></img>
            &emsp; &emsp; &emsp; 
            <img src = {img2} id = "image" alt = " "></img>
            </div>
        </div>
         
    );
}

export default Features;