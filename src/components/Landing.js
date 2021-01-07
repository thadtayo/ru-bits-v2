import React from 'react'

import Particles from 'react-particles-js'
import logo from '../images/acronym.png'
function Particle(props) {

    return (
        <>
            <div className={props.class} style={{height: props.height}}>
                {props.content}
            </div>
            {/* <div>
                <h1 className='hero-h1 py-0'>
                    <img src={logo} alt="Business Information Technology Society" className="logo-main"/>
                </h1>
            </div> */}
            
        </>
    )
}
// 
export default Particle