import CallButton from '../components/CallButton'
import '../assets/styles/home.css'

function Home() {
  return (
    <section
      id="home"
      className="bg-primary text-dark p-5 d-flex caixa-responsiva align-items-center"
    >
      {/* a div abaixo é da caixa sem background */}
      <div className="d-flex align-items-center justify-content-center container container-responsivo">
        {/* a div abaixo é dos textos e botão */}
        <div className="d-flex flex-column me-3 text-area">
          <div className="d-flex justify-content-start flex-column">
            <h1 className="text text-start title">
              English speaking classes to real people and real topics
            </h1>
            <h2 className="text lh-sm subtitle">
              I help busy people to practice their english through the routine
              in a natural and efficient way. Let's work out your speed and
              pronunciation skills.
            </h2>
          </div>
          <div className="d-flex justify-content-center flex-column gap-4 button-area">
            <CallButton />
            <button className="btn btn-light-secondary custom-buttom-2">
              <a href="#about" aria-current="page" className="button-link">
                Learn more about me
              </a>
            </button>
          </div>
        </div>
        {/* a div abaixo é da imagem */}
        <div className="ms-3 home-image-container">
          <img
            src="src/assets/images/nicole_pic.jpeg"
            className="home-image"
          ></img>
        </div>
      </div>
    </section>
  )
}

export default Home
