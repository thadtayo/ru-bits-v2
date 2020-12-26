import React from 'react'
import ContentRow from '../ContentRow'
import Particle from '../Particle'

function Workshops() {
    return (
        <>
            <Particle classHeight={'banner-height'} />

            <div className='container-fluid text-center mt-5'>
                <h2>Watch all previous workshops and events done by BITS!</h2>
                <p className='text-muted'>Click the title to watch!</p>
            </div>

            <div className='container my-5'>

                <ContentRow
                    link1={'https://www.youtube.com/watch?v=oPLvjbzRaHE'}
                    title1={'EXPLORE BAIT 2020: Fireside Chat | College & Careers with BITS Alumni'}
                    description1={'Sit in on fireside chat, where we interview many panelists about there experiences \
                    in BAIT-related roles! \t Taken from BAIT 2020 Virtual Summit'}
                    number1={5}
                    link3={'https://google.com'}
                    title3={'EXPLORE BAIT 2020: Networking 101'}
                    description3={'Learn from seniors and BITS E-Board members Madhav Arora and Joshua Schupak\
                     as they discuss networking and resume tips to help prepare you for the recruiting season! \t\
                     Taken from BAIT 2020 Virtual Summit - Day 2'}
                    number3={4}
                />

                <ContentRow
                    link1={'https://www.youtube.com/watch?v=wYO1dTPgo38'}
                    title1={'Explore BAIT 2020: Day in the Life of a Cisco Systems Engineer'}
                    description1={'Take a look into the life of Rutgers Alum Kaelyn Patel, as she tells us\
                    a little about herself, Cisco as a whole, IT Industry Trends and how the BAIT major parallels her\
                    role at Cisco! \t Taken from BITS 2020 Virtual Summit'}
                    number1={3}
                    link2={'https://www.youtube.com/watch?v=fjyRbtojvOM&t=2s'}
                    title2={'Python Bootcamp 2 - Build Your Own Online Store'}
                    description2={'Use more advanced Python knowledge - such as object-oriented programming - \
                    to build your own e-commerce store!'}
                    number2={2}
                    link3={'https://www.youtube.com/watch?v=aZb9XInAWws&t=2s'}
                    title3={'Python Project 1 - Build a GPA Calculator'}
                    description3={'Utilize your basic Python knowledge to build something everyone uses at least once\
                    in their academic career - a GPA calculator!'}
                    number3={1}
                />

            </div>
        </>

    )
}

export default Workshops


