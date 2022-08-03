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
              Language coaching for busy people
            </h1>
            <h2 className="text lh-sm subtitle">
              I help language learners integrate languages into their lives
              through balanced mindsets, clear goals and actionable learning
              methods.
            </h2>
          </div>
          <div className="d-flex justify-content-center flex-column gap-4 button-area">
            <CallButton />
            <button
              href="/about"
              className="btn btn-light-secondary custom-buttom-2"
            >
              Learn more about me
            </button>
          </div>
        </div>
        {/* a div abaixo é da imagem */}
        <div className="ms-3 home-image-container">
          <img
            src="src/assets/images/home_nicole_pic.jpeg"
            className="home-image"
          ></img>
        </div>
      </div>
    </section>
  )
}

export default Home
