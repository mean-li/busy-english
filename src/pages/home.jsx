import NicoleImage from '../assets/images/Nicole_elipse.png'
import '../assets/styles/home.css'
import CallButton from '../components/CallButton'
function Home() {
  return (
    <section
      id="home"
      className="bg-light text-dark p-5 d-flex caixa-responsiva align-items-center rounded-container"
    >
      {/* a div abaixo é da caixa sem background */}
      <div className="d-flex align-items-center justify-content-center container container-responsivo">
        
        {/* a div abaixo é da imagem */}
        <div className="me-3 home-image-container">
          <img src={NicoleImage} alt="Nicole Tongu" className="home-image" />
        </div>
        
        {/* a div abaixo é dos textos e botão */}
        <div className="d-flex flex-column ms-3 text-area">
          <div className="d-flex justify-content-start flex-column">
            <h1 className="text text-start title">English speaking classes</h1>
            <h2 className="text lh-sm subtitle">
              Eu ajudo pessoas ocupadas a praticar seu inglês através da rotina
              de forma natural e eficiente. Vamos trabalhar suas habilidades de
              velocidade e pronúncia!
            </h2>
          </div>
          <div className="d-flex justify-content-center flex-column gap-4 button-area">
            <CallButton />
            <button className="btn btn-light-secondary custom-button-2">
              <a href="#about" aria-current="page" className="button-link">
                Saiba mais sobre mim
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
