import React from 'react'

function EventDescription(props){
    return (
        <div className="col-lg">
                <h3>{props.title}</h3>
                <h4>{props.date}</h4>
                <p className="event-description">{props.description}</p>
                <p>{props.subdescription}</p>
        </div>
    )
}

export default EventDescription