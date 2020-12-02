import React from 'react'

function Footer(){
    return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
  
          <div className="col-sm-12 col-md-8">
            <h6>About</h6>
            <p className="text-justify">Rutgers Business Information Technology Society (BITS) is a student-run organization
              to help Rutgers students delve into the field of business analytics and information technology.
              BITS focuses on providing optimal ways for students to learn, network, and explore while maintaining a fun,
              light, and professional environment.</p>
          </div>
  
  
          <div className="col-md-4 text-right">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="events.html">Events</a></li>
              <li><a href="workshops.html">Workshops</a></li>
              <li><a href="podcasts.html">Podcasts</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
  
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
              <a href="#">RU Business Information Technology Society</a>.
            </p>
          </div>
  
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/rutgersbits" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a className="instagram" href="https://www.instagram.com/rutgers_bits/" target="_blank"><i className="fa fa-instagram"></i></a></li>
              <li><a className="youtube" href="https://www.youtube.com/channel/UCGF-IjyBcSRSzA-sgYhKOXg" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/company/rutgers-bits/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer