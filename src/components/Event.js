import React from 'react'
import EventFlyer from './EventFlyer'
import EventDescription from './EventDescription'

function Event(props) {
    if (props.flip) {
        return (
            <>
                <div className='row mt-5'>
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
            <div className='row mt-5'>
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
