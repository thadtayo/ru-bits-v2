import React from 'react'

import Particles from 'react-particles-js'
import logo from '../images/acronym.png'
import wave from '../images/wave.svg'

function Landing(props) {

    let waveContent = <></>
    if(props.class === 'landing2'){

        waveContent = <img draggable='false' src={wave} className='wave'alt='Business Information Technology Society'/>
    }
    return (
        <>
            <div className={props.class} style={{height: props.height}}>
                {props.content}
            </div>
            {waveContent}
            {/* <div>
                <h1 className='hero-h1 py-0'>
                    <img src={logo} alt="Business Information Technology Society" className="logo-main"/>
                </h1>
            </div> */}
            
        </>
    )
}

export default Landing

/*
SVG CODE FOR IMAGE: 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#2cb5e8" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,133.3C672,128,768,160,864,149.3C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
*/