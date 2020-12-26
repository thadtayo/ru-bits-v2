import React from 'react'

import Particles from 'react-particles-js'
import logo from '../images/acronym.png'
function Particle(props) {
    return (
        <div style={{
            position: 'relative'
        }}>
            <Particles id='particles-js'
                params={{
                    particles: {
                        number: {
                            value: 80
                        },
                        size: {
                            value: 5
                        },

                    }
                }}

            />
            {/* <div>
                <h1 className='hero-h1 py-0'>
                    <img src={logo} alt="Business Information Technology Society" className="logo-main"/>
                </h1>
            </div> */}
            <img src={logo} alt="Business Information Technology Society" className="logo-main"/>
        </div>
    )
}

export default Particle