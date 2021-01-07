import React from 'react'
import Landing from '../Landing'

function Newsletter(){
    const header = <h1 className='hero2-h1'>Newsletter</h1>

    return (
        <>
        <Landing content={header} height={'40vh'} class={'landing2'}/>

        
        <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='container-fluid text-center mt-5'>
                <h2>Read all newsletters written by BITS!</h2>
                <p className='text-muted'>Coming soon!</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </>

    )
}

export default Newsletter