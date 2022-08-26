import { BsInstagram } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'
import { BsTelephone } from 'react-icons/bs'
import '../../assets/styles/footer.css'

function Footer() {
  return (
    <div className="footer flex fix-spacing custom-border">
      <div className="fix-margin"></div>
      <div className="footer-responsivo d-flex align-items-center justify-content-center gap-5 fix-spacing">
        <a
          href="/contact"
          className="footer-links nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          CONTATO
        </a>

        <a
          href="https://calendly.com/nicoletongu"
          target="_blank"
          className="footer-links nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          AGENDE UMA LIGAÇÃO
        </a>

        <a
          href="/suportme"
          target="_blank"
          className="footer-links nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          CONTRIBUA
        </a>

        {/* <a
          href="/faq"
          // target="_blank"
          className="footer-links nav-link link-secondary text-dark fw-semibold text-sm-center"
        >
          FAQ
        </a> */}
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
        <a href="tel:+5511996873224" target="_blank">
          <BsTelephone
            className="text-dark link-secondary"
            alt="logo twitter"
            size="20"
            color="#000000"
          />
        </a>
        <a href="mailto:nitongu@outlook.com">
          <VscMail
            className="text-dark link-secondary p-0 m-0"
            alt="icone email"
            size="24"
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
