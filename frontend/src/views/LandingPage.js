import React from 'react';
import Explantion from '../components/Explanation.js'
import Team from '../components/Team.js'
import Tools from '../components/Tools'
import FadeIn from 'react-fade-in';

function LandingPage(){
    return(
      <FadeIn>
        <div>
            <Explantion/>
            <Team/>
            <Tools/>
        </div>
      </FadeIn>
    );
}

export default LandingPage;
