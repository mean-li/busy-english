import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/home'
import About from '../pages/about'
import SuportMe from '../pages/suportme'
import Classes from '../pages/classes'

function SiteRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/suportme" element={<SuportMe />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </Router>
  )
}

export default SiteRoutes
