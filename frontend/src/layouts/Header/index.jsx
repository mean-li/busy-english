import '../../assets/styles/header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import React, { useState } from 'react'

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
      <header className="header fixed-top bg-white">
        <div className="navbar">
          <nav className=" navigation">
            <a href="/" className="d-flex flex-column">
              <span className="mb-cleaner text-dark h1 fs-3 fw-bold logo">
                BUSY
                <br />
                ENGLISH
              </span>
            </a>
            <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}
            >
              {isNavExpanded ? (
                <CgClose size="28" />
              ) : (
                <GiHamburgerMenu size="25" />
              )}
            </button>
            <div
              className={
                isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
              }
            >
              <ul className="nav justify-content-end gap-5">
                <li className="nav-item">
                  <a
                    href="#about"
                    className="link-secondary text-dark custom-font responsive-custom-font"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#classes"
                    className="link-secondary text-dark custom-font responsive-custom-font"
                    aria-current="page"
                  >
                    Classes
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="divider"></section>
    </>
  )
}

export default Header
