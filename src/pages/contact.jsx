import { BsWhatsapp } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'
import { BsDiscord } from 'react-icons/bs'
import { SiGooglemeet } from 'react-icons/si'
import { SiZoom } from 'react-icons/si'
import '../assets/styles/contact.css'

function Contact() {
  return (
    <>
      <section
        id="contact">

        <div className="bg-white rounded-container text-dark p-5 d-flex caixa-responsiva align-items-center"
        >
          {/* a div abaixo é da caixa sem background */}
          <div className="d-flex align-items-center justify-content-center container container-responsivo gap-4">
            {/* a div abaixo é dos textos e botão */}
            <div className="d-flex flex-column me-3 right-responsive-fix text-area">
              <div className="d-flex justify-content-start flex-column">
                <h1 className="about-title text text-start lh-sm">
                  Tem interesse?
                </h1>
                <h2 className="about-subtitle text text-start lh-sm">
                  Me chama!
                </h2>
                <h3 className="about-text text text-start lh-sm mb-0">
                  Ficarei feliz em esclarecer qualquer dúvida e te contar mais
                  sobre o funcionamento das aulas.
                </h3>
              </div>
              <div className="d-flex justify-content-center flex-column gap-3 button-area">
                <button className="custom-button-1 btn btn-secondary">
                  <a
                    href="https://api.whatsapp.com/send?phone=+5511996873224&text=Hi Nicole!"
                    className="button-link"
                    target="_blank"
                  >
                    Me manda uma mensagem <BsWhatsapp size="21" />
                  </a>
                </button>
                <button className="btn btn-light-secondary custom-button-2">
                  <a
                    href="mailto:nitongu@outlook.com"
                    className="button-link"
                    target="_blank"
                  >
                    Me envie um email <VscMail size="24" />
                  </a>
                </button>
              </div>
            </div>
            {/* a div abaixo é dos textos e botão */}
            <div className="d-flex flex-column left-responsive-fix text-area">
              <div className="d-flex justify-content-start flex-column">
                <h1 className="about-subtitle text text-start lh-sm">
                  Plataformas que utilizo
                </h1>
                <h2 className="about-text text text-start lh-sm">
                  Podemos ter nossas aulas em qualquer uma dessas plataformas!
                </h2>
                <div className="d-flex align-items-center justify-content-center flex-direction-row gap-4 p-1 mb-3">
                  <SiGooglemeet
                    className="text-dark link-secondary"
                    alt="logo twitter"
                    size="30"
                    color="#000000"
                  />
                  <SiZoom
                    className="text-dark link-secondary p-0 m-0"
                    alt="icone email"
                    size="36"
                    color="#000000"
                  />
                  <BsDiscord
                    className="text-dark link-secondary"
                    alt="logo instagram"
                    size="30"
                    color="#000000"
                  />
                </div>
                <h2 className="about-text text text-start lh-sm">
                  Se você quiser uma plataforma que não está listada acima, entre
                  em contato e podemos checar se é possível utilizá-la em nossa
                  aula.
                </h2>
              </div>
            </div>
          </div></div>
      </section>
    </>
  )
}

export default Contact
