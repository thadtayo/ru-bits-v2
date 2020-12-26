import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Workshops from './pages/Workshops'
import Podcasts from './pages/Podcasts'
import Newsletter from './pages/Newsletter'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router> 
      <ScrollToTop/>
      <Navbar/>
      <Route path='/' exact component={Home}/>
      <Route path='/events' exact component={Events}/>
      <Route path='/workshops' exact component={Workshops}/>
      <Route path='/podcasts' exact component={Podcasts}/>
      <Route path='/newsletter' exact component={Newsletter}/>
      <Footer/>

      
    </Router>
    
  )
}

export default App
