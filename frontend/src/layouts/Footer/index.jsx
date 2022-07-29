import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <div className=" fix-spacing custom-border">
      <div className='fix-margin'>
      </div>
      <div className="container d-flex align-items-center justify-content-center gap-5 fix-spacing">
        <a className="footer"> </a> 
        <a
          href="/PRESS"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center "
        >
          PRESS
        </a>

        <a
          href="/CONTACT"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          CONTACT
        </a>

        <a
          href="/BOOK A CALL"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          BOOK A CALL
        </a>

        <a
          href="/SUPORT ME"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          SUPORT ME
        </a>


      </div>
      <div className="container d-flex align-items-center justify-content-center gap-4 fix-spacing">
      <a className="contact"> </a>
             <a href="/Instagram">
          <BsInstagram
            className="text-dark link-secondary"
            alt="logo instagram"
            size="20"
            color="#000000"
          />
        </a>
        <a href="/twitter">
          <BsTwitter
            className="text-dark link-secondary"
            alt="logo twitter"
            size="20"
            color="#000000"
          />
        </a>
        <a href="/youtube">
          <BsYoutube
            className="text-dark link-secondary"
            alt="logo youtube"
            size="20"
            color="#000000"
          />
        </a>

        <a className="social"> </a> 
      </div>

      <div>
        <p className="footer_copyright text-center fw-normal">
          {' '}
          © mean.li | 2022
        </p>
        <p className="meanli"> </p>
      </div>
    </div>
  )
}

export default Footer
