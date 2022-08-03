import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import '../../assets/styles/footer.css'

function Footer() {
  return (
    <div className="footer flex fix-spacing custom-border">
      <div className="fix-margin"></div>
      <div className="footer-responsivo d-flex align-items-center justify-content-center gap-5 fix-spacing">
        <a
          href="/CONTACT"
          target="_blank"
          className="footer-links nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          CONTACT
        </a>

        <a
          href="https://calendly.com/nicoletongu"
          target="_blank"
          className="footer-links nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          BOOK A CALL
        </a>
        <a
          href="/SUPORT ME"
          target="_blank"
          className="footer-links nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          SUPORT ME
        </a>
      </div>
      <div className="footer-social d-flex align-items-center justify-content-center gap-4 fix-spacing">
        <a href="https://www.instagram.com/_colapse/" target="_blank">
          <BsInstagram
            className="text-dark link-secondary"
            alt="logo instagram"
            size="20"
            color="#000000"
          />
        </a>
        <a href="/twitter" target="_blank">
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

      <div className="copyright">
        <p className="footer-copyright text-center fw-normal">
          ©{' '}
          <a
            className="button-link"
            href="https://github.com/mean-li"
            target="_blank"
          >
            mean.li
          </a>{' '}
          | 2022
        </p>
      </div>
    </div>
  )
}

export default Footer
