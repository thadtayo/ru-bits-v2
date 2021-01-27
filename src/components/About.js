import React from 'react'
import insight from '../images/insight.svg'
import exposure from '../images/exposure.svg'
import development from '../images/development.svg'

function About() {
    return (
        <div className="container-fluid box-shadow" id="about">
            <div className="container text-center my-5">
                <h2 className="section-header">What We Offer</h2>


                <div className="row">

                    <div className="col-md mx-3">


                        <img className="rounded mb-3" src={insight} alt="Insight" />
                        <br />
                        <strong>Insight</strong>
                        <p>Through our Speaker Series and Bits by BITS newsletter, you will gain valuable insight into the professional industry.</p>


                    </div>

                    <div className="col-md mx-3">

                        <img className="rounded mb-3" src={exposure} alt="Exposure" />
                        <br />
                        <strong>Exposure</strong>
                        <p>With our corporate events, annual BAIT summit, and various other events throughout the semester, you will be sure to be exposed to
                            the important things that you don't quite get in a classroom.
                        </p>

                    </div>

                    <div className="col-md mx-3">

                        <img className="rounded mb-3" src={development} alt="Development" />
                        <br />
                        <strong>Development</strong>
                        <p>Our community prioritizes development. Grow your personal self through our BITS Mentorship Program, or grow your professional self through our BITS Expo.
                            Regardless, BITS will allow you to thrive.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About