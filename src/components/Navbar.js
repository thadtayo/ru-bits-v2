import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top transparent">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
            aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample07">
    
            <ul className="navbar-nav mr-auto">
              <li className="nav-item px-2">
                <Link className="nav-link hover-effect" to='/'>HOME</Link>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link hover-effect" href="#about">ABOUT</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link hover-effect" href="#events">EVENTS</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link hover-effect" href="#team">TEAM</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link hover-effect" href="#contact">CONTACT</a>
              </li>
            </ul>
    
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <Link to="/events" className="nav-link hover-effect">EVENTS</Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/workshops" className="nav-link hover-effect">WORKSHOPS</Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/podcasts" className="nav-link hover-effect">PODCASTS</Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/newsletter" className="nav-link hover-effect">NEWSLETTER</Link>
              </li>
    
    
            </ul>
    
          </div>
        </div>
      </nav>
    )
}

export default Navbar