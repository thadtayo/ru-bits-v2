import React, { useState } from 'react'
import teach from '../images/teach.png'
import network from '../images/network.png'
import newsletter from '../images/newsletter.png'

function About() {
    const [active, setActive] = useState(false)

    return (
        <div className="container-fluid box-shadow" id="about">
            <div className="container text-center my-5">
                <h2 className="section-header">What We Do</h2>


                <div className="row">

                    <div className="col-md">


                        <img className="rounded mb-3" src={teach} alt="Card image cap" />
                        <br />
                        <strong>Teach</strong>
                        <p>Attend our many workshops, where we give quick crash courses on various BITS
                            topics, regardless of experience or background.</p>


                    </div>

                    <div className="col-md">

                        <img className="rounded mb-3" src={network} alt="Card image cap" />
                        <br />
                        <strong>Network</strong>
                        <p>Connect with many professionals and like-minded students at our networking events.</p>

                    </div>

                    <div className="col-md">

                        <img className="rounded mb-3" src={newsletter} alt="Card image cap" />
                        <br />
                        <strong>Inform</strong>
                        <p>Read our quality newsletter concerning various hot topics in the world of business
            analytics and information technoology, updated regularly.</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About