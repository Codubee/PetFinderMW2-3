import React from 'react';
import Features from '../components/Features';
import Explantion from '../components/Explanation.js'
import Team from '../components/Team.js'
import Tools from '../components/Tools'

function LandingPage(){
    return(
        <div>
            <Explantion/>
            <Features/>
            <Tools/>
            <Team/>
        </div>
    )
}

export default LandingPage;
