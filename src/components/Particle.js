import React from 'react'

import Particles from 'react-particles-js'
import logo from '../images/acronym.png'
function Particle(props) {
    return (
        <div id='particles-js' className={props.classHeight}>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 50
                        },
                        size: {
                            value: 5
                        },

                    }
                }}
            />
            <h1 className='hero-h1 py-0'>
                    <img src={logo} alt="Business Information Technology Society" className="logo-main"/>
            </h1>
        </div>
    )
}

export default Particle