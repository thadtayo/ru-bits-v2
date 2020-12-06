import React from 'react'
import Event from '../Event'
import Particle from '../Particle'
import _08_22_20 from '../../images/flyers/08_22_20.JPG'

function Events() {
    return (
        <>
            <Particle classHeight={'banner-height'}/>

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
                    <Event flip={true} />
                    <Event flip={false} />
                    <Event flip={true} />
                </div>

            </div>

            <div className='container-fluid box-shadow text-center' id='past'>
                <h2 className='section-header'>Past Events</h2>
                <Event flip={true} />
                <Event flip={false} />
                <Event flip={true} />
                <Event flip={false} />
                <Event flip={true} />
            </div>
        </>


    )
}

export default Events


/*
 <div class="container">
        <h2 class="section-header">Upcoming Events</h2>

        <div class="row">
            <div class="col-lg">
                <img src="flyers/08_22_20.JPG" alt="">
            </div>
            <div class="col-lg">
                <h3>2020 BITS Virtual Summit!</h3>
                <h4>(08/22/20) + (08/29/20)</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, consequatur! Cum nesciunt recusandae, ratione deleniti mollitia suscipit enim praesentium laborum quisquam eius temporibus non, ab a reprehenderit id accusantium tempore.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga repellat necessitatibus magnam dolorem nam dolor sint eum voluptates non officiis quia earum deleniti minus exercitationem laudantium, obcaecati facere vero tempora.</p>
            </div>
        </div>


    </div>
    */