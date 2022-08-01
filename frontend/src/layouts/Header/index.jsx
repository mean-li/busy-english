import '../../assets/styles/header.css'
import React, { useState, useEffect } from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi'

function Header() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <>
      <header className="header fixed-top bg-white">
        <div className="navbar">
          <a href="#home" className="d-flex flex-column">
            <span className="mb-cleaner text-dark h1 fs-3 fw-bold logo">
              BUSY<br></br>ENGLISH
            </span>
          </a>
          <div>
            {isDesktop ? (
              <nav className="navbar">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a
                      href="#about"
                      className="link-secondary text-dark custom-font"
                      aria-current="page"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className="navbar-responsive">
                <ul className="nav-responsive justify-content-end">
                  <li className="nav-item">
                    <a
                      href="#about"
                      className="link-secondary text-dark custom-font"
                      aria-current="page"
                    >
                      About Responsivo
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
      <section className="divider"></section>
    </>
  )
}

export default Header
