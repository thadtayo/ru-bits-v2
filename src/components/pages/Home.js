import React from 'react'
import Landing from '../Landing'
import About from '../About'
import Events from '../Events'
import Team from '../Team'
import Learn from '../Learn'
import logo from '../../images/acronym.png'

function Home(){
    const img = 
    <div className='shadow'><img src={logo} alt="Business Information Technology Society" className="logo-main"/></div>
    
    return (
        <div>
            <Landing content={img} height={'100vh'} class={'landing'}/>
            <About/>
            <Events/>
            <Team/>
            <Learn/>
        </div>
        

    )
}

export default Home