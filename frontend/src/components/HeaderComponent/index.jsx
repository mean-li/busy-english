import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from '../../pages/about'
import Home from '../../pages/home'
import './styles.css'

function Header() {
  return (
    <Router>
      <div className="headerContainer">
        <div className="header">
          <Link to="/">
            <h1 className="logo">BusyEnglish</h1>
          </Link>
          <nav className="headerNav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default Header
