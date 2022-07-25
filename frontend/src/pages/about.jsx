function About() {
  return (
    <>
      <section
        id="about"
        className="bg-white p-2 text-dark bg-opacity-25 mt-5 p-5 d-flex "
      >
        {/* a div abaixo é da caixa sem background */}
        <div className="container d-flex align-items-center justify-content-center flex-row m-5 p-3">
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
          </div>
          {/* a div abaixo é da imagem */}
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
          </div>
        </div>
      </section>
    </>
  )
}

export default About
