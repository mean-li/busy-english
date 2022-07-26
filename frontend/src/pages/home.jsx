import CallButton from '../components/CallButton'

function Home() {
  return (
    <section
      id="home"
      className="bg-primary p-2 text-dark bg-opacity-25 mt-5 p-5 d-flex "
    >
      {/* a div abaixo é da caixa sem background */}
      <div className="container d-flex align-items-center justify-content-center p-5 ms-5 me-5 container-responsivo">
        {/* a div abaixo é dos textos e botão */}
        <div className="d-flex flex-column me-2">
          <div className="d-flex justify-content-start flex-column">
            <h1 className="fs-1 text text-start lh-sm">
              Language coaching for busy people
            </h1>
            <h2 className="fs-5 text text-start fw-normal lh-sm">
              I help language learners integrate languages into their lives
              through balanced mindsets, clear goals and actionable learning
              methods.
            </h2>
          </div>
          <div className="d-flex justify-content-end flex-column gap-2">
            <CallButton />
            <a href="/about" className="btn btn-light-secondary">
              Learn more about me
            </a>
          </div>
        </div>
        {/* a div abaixo é da imagem */}
        <div className="ms-2">
          <img
            className="rounded w-100 h-100"
            src="https://i0.wp.com/lindiebotes.com/wp-content/uploads/2022/06/Screenshot-2022-05-31-at-8.20.33-PM-1.png?resize=916%2C1024&ssl=1"
          ></img>
        </div>
      </div>
    </section>
  )
}

export default Home
