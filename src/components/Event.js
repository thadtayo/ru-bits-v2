import React from 'react'
import EventFlyer from './EventFlyer'
import EventDescription from './EventDescription'

function Event(props) {
    if (props.flip) {
        return (
            <>
                <div className='row'>
                    <EventFlyer
                        flyer={props.flyer}
                        alt={props.alt}
                    />

                    <EventDescription
                        title={props.title}
                        date={props.date}
                        description={props.description}
                        subdescription={props.subdescription}
                    />

                </div>


            </>

        )
    }
    return (
        <>
            <div className='row'>
                <EventDescription
                    title={props.title}
                    date={props.date}
                    description={props.description}
                    subdescription={props.subdescription}
                />
                <EventFlyer
                    flyer={props.flyer}
                    alt={props.alt}
                />
            </div>
        </>
    )
}

export default Event
