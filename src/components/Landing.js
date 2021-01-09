import React from 'react'

import Particles from 'react-particles-js'
import logo from '../images/acronym.png'
import wave from '../images/wave.svg'

function Landing(props) {

    let waveContent = <></>
    if(props.class === 'landing2'){
        console.log('yur')
        waveContent = <img src={wave} alt='Business Information Technology Society'/>
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
// 
export default Landing