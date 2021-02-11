import React from 'react'
import Event from '../Event'
import Landing from '../Landing'
import _06_16_20 from '../../images/flyers/06_16_20.jpg'
import _07_21_20 from '../../images/flyers/07_21_20.png'
import _07_29_20 from '../../images/flyers/07_29_20.jpg'
import _08_05_20 from '../../images/flyers/08_05_20.JPG'
import _08_19_20 from '../../images/flyers/08_19_20-08_20_20.JPG'
import _08_21_20 from '../../images/flyers/08_21_20_2.JPG'
import _08_22_20 from '../../images/flyers/08_22_20_1.JPG'
import crowe from '../../images/flyers/Crowe LLP Info Session (p1).png'

function Events() {
    const header = <h1 className='hero2-h1'>Events</h1>
    return (
        <>
            <Landing content={header} height={'40vh'} class={'landing2'} />
            <div className='container-fluid box-shadow text-center mb-5' id='upcoming'>
                <div className='container'>
                    <h2 className='section-header'>Upcoming Events</h2>
                    <Event
                        flyer={crowe}
                        alt={'Crowe LLP Info Session'}
                        title={'Rutgers BITS presents Crowe LLP!'}
                        date={'02/23/2021'}
                        description={'Crowe LLP, a public accounting, consulting, and technology firm with offices around the world, will join BITS for an information session on some of its most data analytics-driven consulting groups. The firm will focus the discussion on their Financial Crimes Analytics group.'}
                        signup={'http://bit.ly/crowellp'}
                        zoomlink={'https://rutgers.zoom.us/j/96408260974?pwd=RHVaOU9VYXRZSzZCYTk4TTlSMFZRQT09'}
                        upcoming={true}
                        flip={true} />
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
                        description={'The 2020 BITS Virtual Summit is finally here! Explore BAIT through countless events throughout the weekend that will give you professional insight on the industry.'}
                        flip={true} />

                    <Event
                        flyer={_08_21_20}
                        alt={'Sports Analytics with Playstation Data Scientist: Payton Soicher'}
                        title={'Sports Analytics with Playstation Data Scientist: Payton Soicher'}
                        date={'08/21/20'}
                        description={'Lets talk sports analytics! Hear insight from Playstation data scientist Payton Soicher as he talks about his role at the company and his journey in becoming a data scientist.'}
                        flip={false} />

                    <Event
                        flyer={_08_19_20}
                        alt={'2-Day Python Bootcamp'}
                        title={'2-Day Python Bootcamp'}
                        date={'(08/19/20) + (08/20/20)'}
                        description={'Apply your Python skills to build your own GPA Calculator and Online Store in Python! Office hours will be available for any technical aid such as Python or VS Code intallation.'}
                        flip={true} />

                    <Event
                        flyer={_08_05_20}
                        alt={'Python Workshop 2: Intermediate Learning'}
                        title={'Python Workshop 2: Intermediate Learning'}
                        date={'08/05/20'}
                        description={'Learn more advanced Python topics in Pt. 2 of our two-part Python workshop series!'}
                        flip={false} />

                    <Event
                        flyer={_07_29_20}
                        alt={'Python Workshop 1: The Basics'}
                        title={'Python Workshop 1: The Basics'}
                        date={'07/29/20'}
                        description={'Come join us on Wednesday to learn the basics of Python! This is part 1 of a two-part series!'}
                        flip={true} />
                    <Event
                        flyer={_07_21_20}
                        alt={'Excel Workshop Pt. 2 - Statistic Models Edition'}
                        title={'Excel Workshop Pt. 2 - Statistic Models Edition'}
                        date={'07/21/20'}
                        description={'Learn how to create statistics models and conduct ANOVA tests on Excel in our Pt. 2 Excel workshop, hosted by Joshua!'}
                        flip={false} />

                    <Event
                        flyer={_06_16_20}
                        alt={'Learn Excel - Beyond the Basics!'}
                        title={'Learn Excel - Beyond the Basics!'}
                        date={'06/16/20'}
                        description={'Come join us in to learn about data science and statistics in excel! This is part 1 of a two-part series!'}
                        flip={true} />
                </div>

            </div>
        </>


    )
}

export default Events