import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <div className="">
      <div className="container d-flex align-items-center justify-content-center gap-3">
        <a
          href="/Press"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center "
        >
          Press
        </a>

        <a
          href="/Contact"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          Contact
        </a>

        <a
          href="/Book a Call"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          Book a Call
        </a>

        <a
          href="/Suport me"
          className="nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          Suport me
        </a>
      </div>
      <div className="container d-flex align-items-center justify-content-center gap-4">
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
      </div>
      <div>
        <p className="footer_copyright text-center fw-normal">
          {' '}
          © mean.li | 2022
        </p>
      </div>
    </div>
  )
}

export default Footer
