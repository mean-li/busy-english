import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Classes from '../pages/classes'
import FAQ from '../pages/faq'

function SiteRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default SiteRoutes
