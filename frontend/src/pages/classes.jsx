import CallButton from '../components/CallButton'

function Classes() {
  return (
    <section
      id="classes"
      className="bg-primary text-dark p-5 d-flex caixa-responsiva align-items-center"
    >
      {/* a div abaixo é da caixa sem background */}
      <div className="d-flex gap-3 align-items-center justify-content-center container container-responsivo">
        {/* a div abaixo é do tipo 1 */}
        <div className="card border-dark d-flex flex-column me-3 text-area">
          <div className="card-body gap-3 d-flex justify-content-start flex-column">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="opacity-50 w-100"
                src="src/assets/images/video-chatting.jpg"
              ></img>
              <h1 className="card-title text text-center position-absolute">
                Type 1
              </h1>
            </div>
            <h2 className="card-text text lh-sm about-text">
              Based on your interests I create a personalized material and send
              to you to read - the material is a short text about a topic, the
              aim of this is to have a topic and break the ice.
              <br /> If the conversation take different directions it's fine,
              because what we want is to practice conversation, not to know how
              to talk about a certain topic, so don't be afraid :D
            </h2>
          </div>
          <div className="card-body d-flex justify-content-center flex-column gap-4 button-area">
            <button className="btn btn-light-secondary custom-buttom-2">
              <a href="#about" aria-current="page" className="button-link">
                Learn more
              </a>
            </button>
            <CallButton />
          </div>
        </div>
        {/* a div abaixo é do tipo 2 */}
        <div className="card d-flex flex-column me-3 text-area">
          <div className="card-body gap-3 d-flex justify-content-start flex-column">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="opacity-50 w-100"
                src="src/assets/images/video-chatting-apps.png"
              ></img>
              <h1 className="card-title text text-center position-absolute">
                Type 2
              </h1>
            </div>
            <h2 className="card-text text lh-sm about-text">
              You choose a specific vocabulary you want to practice, for
              example: business english, traveling english...
              <br /> I'll send you a material with the new vocabulary so you can
              study. In the class we're going to practice that with realistic
              situations.
            </h2>
          </div>
          <div className="card-body d-flex justify-content-center flex-column gap-4 button-area">
            <button className="btn btn-light-secondary custom-buttom-2">
              <a href="#about" aria-current="page" className="button-link">
                Learn more
              </a>
            </button>
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Classes
