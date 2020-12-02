import React from 'react'

import Particles from 'react-particles-js'
import logo from '../images/acronym.png'
function Particle() {
    return (
        <div id='particles-js'>
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
                className='full-height'
            />
            <h1 className='hero-h1 py-0'>
                <div>
                    <img src={logo} alt="Business Information Technology Society" className="logo-main"/>
                </div>

            </h1>
        </div>
    )
}

export default Particle