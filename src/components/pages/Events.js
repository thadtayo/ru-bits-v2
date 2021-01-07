import React from 'react'
import Event from '../Event'
import Landing from '../Landing'
import _08_22_20 from '../../images/flyers/08_22_20.JPG'

function Events() {
    const header = <h1 className='hero2-h1'>Events</h1>
    return (
        <>
            <Landing content={header} height={'40vh'} class={'landing2'}/>

            <div className='container-fluid box-shadow text-center my-5' id='upcoming'>
                <div className='container'>
                    <h2 className='section-header'>Upcoming Events</h2>
                    <Event
                        flyer={_08_22_20}
                        alt={'Come join the BITS virtual summit!'}
                        title={'2020 BITS Virtual Summit!'}
                        date={'(08/22/20) + (08/29/20)'}
                        description={'This is a test description'}
                        flip={true} />

                    <Event
                        flyer={_08_22_20}
                        alt={'Come join the BITS virtual summit!'}
                        title={'2020 BITS Virtual Summit!'}
                        date={'(08/22/20) + (08/29/20)'}
                        description={'This is a test description'}
                        flip={false} />
                </div>

            </div>

            <div className='container-fluid box-shadow text-center' id='past'>
                <div className='container'>
                    <h2 className='section-header'>Past Events</h2>
                    <Event
                        flyer={_08_22_20}
                        alt={'Come join the BITS virtual summit!'}
                        title={'2020 BITS Virtual Summit!'}
                        date={'(08/22/20) + (08/29/20)'}
                        description={'This is a test description'}
                        flip={true} />

                    <Event
                        flyer={_08_22_20}
                        alt={'Come join the BITS virtual summit!'}
                        title={'2020 BITS Virtual Summit!'}
                        date={'(08/22/20) + (08/29/20)'}
                        description={'This is a test description'}
                        flip={false} />
                    <Event
                        flyer={_08_22_20}
                        alt={'Come join the BITS virtual summit!'}
                        title={'2020 BITS Virtual Summit!'}
                        date={'(08/22/20) + (08/29/20)'}
                        description={'This is a test description'}
                        flip={true} />

                    <Event
                        flyer={_08_22_20}
                        alt={'Come join the BITS virtual summit!'}
                        title={'2020 BITS Virtual Summit!'}
                        date={'(08/22/20) + (08/29/20)'}
                        description={'This is a test description'}
                        flip={false} />
                </div>

            </div>
        </>


    )
}

export default Events