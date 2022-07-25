import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/home'
import About from '../pages/about'
import Blog from '../pages/blog'
import Newsletter from '../pages/newsletter'

function SiteRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  )
}

export default SiteRoutes
