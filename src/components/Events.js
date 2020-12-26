import React from 'react'
import { Link } from 'react-router-dom'
import flyer_1 from '../images/flyers/08_22_20.JPG'
import flyer_2 from '../images/flyers/08_22_2020.JPG'

function Events() {
    return (
        <div className="container-fluid box-shadow py-5" id="events">
            <div className="container text-center">
                <h2 className="section-header-2">Events</h2>

                <p className='events-text'><strong>BITS</strong> hosts many events for students to be able to participate in! They range from tech workshops to guest-speakers from established companies to coding bootcamps,
      and many more! All students are able to participate in an event, regardless of background. We highly encourage all students who are interested in BAIT to consider
      these events, as they are specifically tailored for the field.
    </p>
                <div className="row mt-2">

                    <div className="col-md">
                        <img src={flyer_1} className="rounded" alt="" />
                    </div>
                    <div className="col-md">
                        <img src={flyer_2} className="rounded" alt="" />
                    </div>
                </div>


                <button type="button" className="btn btn-lg mt-5"> <Link to='events'>Learn More</Link></button>
            </div>
        </div>
    )
}

export default Events