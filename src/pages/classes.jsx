import '../assets/styles/classes.css'
import CallButton from '../components/CallButton'
import TypeOneImage from '../assets/images/inverted-book.png'
import TypeTwoImage from '../assets/images/book.png'

function Classes() {
  return (
    <>
      <section
        id="classes"
        className="bg-primary text-dark p-5 d-flex caixa-responsiva align-items-center"
      >
        {/* a div abaixo é da caixa sem background */}
        <div className="d-flex align-items-center justify-content-center container container-responsivo">
          {/* a div abaixo é dos textos e botão */}
          <div className="d-flex flex-column me-3 text-area">
            <div className="d-flex justify-content-start flex-column">
              <h1 className="text text-center subtitle fw-semibold">
                Regular Conversation
              </h1>
              <h2 className="text lh-sm about-text">
                Com base nos seus interesses eu crio um material personalizado e
                envio para você ler - o material é um pequeno texto sobre um
                tema, o objetivo disso é ter um tema para quebrar o gelo. <br />
                Se a conversa tomar rumos diferentes tudo bem, porque o que a
                gente quer é praticar a conversação, não saber falar sobre
                determinado assunto, então não tenha medo :D
              </h2>
            </div>
            <div className="d-flex justify-content-center flex-column gap-4 button-area">
              <button className="btn btn-light-secondary custom-button-2">
                <a href="#contact" aria-current="page" className="button-link">
                  Saiba mais
                </a>
              </button>
              <CallButton />
            </div>
          </div>
          {/* a div abaixo é da imagem */}
          <div className="ms-3 home-image-container">
            <img
              src={TypeOneImage}
              alt="Books on a table"
              className="home-image opacity-75"
            ></img>
          </div>
        </div>
      </section>
      <section
        id="home"
        className="bg-primary text-dark p-5 d-flex caixa-responsiva align-items-center"
      >
        {/* a div abaixo é da caixa sem background */}
        <div className="d-flex align-items-center justify-content-center container container-responsivo">
          {/* a div abaixo é da imagem */}
          <div className="me-3 type2-margin type2-image-responsive home-image-container">
            <img
              src={TypeTwoImage}
              alt="Books on a table"
              className="type2-image opacity-75"
            ></img>
          </div>
          {/* a div abaixo é dos textos e botão */}
          <div className="d-flex flex-column ms-3 text-area type2-margin">
            <div className="d-flex justify-content-start flex-column">
              <h1 className="text text-center subtitle fw-semibold">Type 2</h1>
              <h2 className="text lh-sm about-text">
                You choose a specific vocabulary you want to practice, for
                example: business english, traveling english...
                <br /> I'll send you a material with the new vocabulary so you
                can study. In the class we're going to practice that with
                realistic situations.
              </h2>
            </div>
            <div className="d-flex justify-content-center flex-column gap-4 button-area">
              <button className="btn btn-light-secondary custom-button-2">
                <a href="#contact" aria-current="page" className="button-link">
                  Saiba mais
                </a>
              </button>
              <CallButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Classes
