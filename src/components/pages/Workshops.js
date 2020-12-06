import React from 'react'
import ContentRow from '../ContentRow'
import Particle from '../Particle'

function Workshops() {
    return (
        <>
            <Particle classHeight={'banner-height'} />

            <div className='container-fluid text-center mt-5'>
                <h4>Watch all previous workshops done by BITS!</h4>
            </div>

            <div className='container my-5'>
                <ContentRow
                    
                    link2={'https://google.com'}
                    title2={'Title 2'}
                    description2={'This is a description for workshop 2.'}
                    number2={2}
                    
                />

                <ContentRow
                    link1={'https://google.com'}
                    title1={'Title 1'}
                    description1={'This is a description for workshop 1.'}
                    number1={3}
                    link2={'https://google.com'}
                    title2={'Title 2'}
                    description2={'This is a description for workshop 2.'}
                    number2={2}
                    link3={'https://google.com'}
                    title3={'Title 3'}
                    description3={'This is a description for workshop 3.'}
                    number3={1}
                />

                <ContentRow
                    link1={'https://google.com'}
                    title1={'Title 1'}
                    description1={'This is a description for workshop 1.'}
                    number1={3}
                    link2={'https://google.com'}
                    title2={'Title 2'}
                    description2={'This is a description for workshop 2.'}
                    number2={2}
                    link3={'https://google.com'}
                    title3={'Title 3'}
                    description3={'This is a description for workshop 3.'}
                    number3={1}
                />

                <ContentRow
                    link1={'https://google.com'}
                    title1={'Title 1'}
                    description1={'This is a description for workshop 1.'}
                    number1={3}
                    link2={'https://google.com'}
                    title2={'Title 2'}
                    description2={'This is a description for workshop 2.'}
                    number2={2}
                    link3={'https://google.com'}
                    title3={'Title 3'}
                    description3={'This is a description for workshop 3.'}
                    number3={1}
                />

            </div>
        </>

    )
}

export default Workshops


