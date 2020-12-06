import React from 'react'

function EventFlyer(props){
    return (
        <div className="col-lg">
            <img src={props.flyer} alt={props.alt}/>
        </div>
    )
}

export default EventFlyer