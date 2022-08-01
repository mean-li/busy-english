import '../../assets/styles/header.css'

function Header() {
  return (
    <>
      <header className="header fixed-top bg-white">
        <div className="navbar">
          <a href="#home" className="d-flex flex-column">
            <span className="mb-cleaner text-dark h1 fs-3 fw-bold">BUSY</span>
            <span className="mb-cleaner text-dark h1 fs-3 fw-bold">
              ENGLISH
            </span>
          </a>
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
        </div>
      </header>
      <section className="divider"></section>
    </>
  )
}

export default Header
