import React from 'react'

function Learn() {
    return (
        <div className="fluid-container text-center line-height-extended" id="contact">
            <h2 className="section-header">Learn More</h2>
            <div>
                <p>If you have any questions, email us at <a href="mailto:bits.rutgers@gmail.com"
                    className="significant-link">bits.rutgers@gmail.com</a>!</p>
                <p>To stay in the loop with upcoming BITS events and keep up with our future workshops, join our mailing list!</p>
                <button type="button" className="btn btn-lg btn-danger mb-3"><a href="http://bit.ly/JOINBITS" target="_blank" rel="noreferrer">Join the community!</a></button>
                <p> Don't forget to follow us on social media!</p>
            </div>
        </div>
    )
}

export default Learn