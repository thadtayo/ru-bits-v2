import React from 'react'

function EventDescription(props){
    let links = <></>
    if(props.upcoming){
        links = 
        <div style={{fontSize: '1.1em'}}>
            <p>Sign up here: <a href={props.signup}>{props.signup}</a></p>
            <p>Zoom link: <a href={props.zoomlink}> {props.zoomlink} </a></p>
        </div>
    }
    return (
        <div className="col-lg">
                <h3>{props.title}</h3>
                <h4>{props.date}</h4>
                <p className="event-description">{props.description}</p>
                <p>{props.subdescription}</p>
                {links}
        </div>
    )
}

export default EventDescription