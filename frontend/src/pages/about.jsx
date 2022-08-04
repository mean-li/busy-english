import '../assets/styles/about.css'

function About() {
  return (
    <>
      <section
        id="about"
        className="bg-red-white caixa-responsiva text-dark p-5 d-flex"
      >
        {/* a div abaixo é da caixa sem background */}
        <div className="container container-responsivo d-flex align-items-center justify-content-center flex-column">
          {/* a div abaixo é dos textos */}
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-start flex-column">
              <h1 className="about-title text text-start lh-sm">
                Hey, my name is Nicole :)
              </h1>
              <h2 className="about-subtitle text text-start lh-sm">
                My background
              </h2>
              <h3 className="about-text text text-start lh-sm">
                I'm a economy student that totally love to teach and learn
                languages! I've been studying english since I was 9 years old, I
                fell in love at the first sight! I've taken the First Cambridge
                Certificate - an international test that levels your english -
                and my speaking level was C1 (fluent); that's why I enjoy to
                teach speaking skills!
              </h3>
            </div>
          </div>
          {/* a div abaixo é da imagem */}
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-start flex-column">
              <h1 className="about-subtitle text text-start lh-sm">
                What I do
              </h1>
              <h2 className="about-text text text-start fw-normal lh-sm">
                Throughout my career as a teacher I've noticed that the major
                part of the students had the speaking part neglected; while
                learning a language grammar is really important, but in real
                life if you learn a language but can't talk... then why was it
                useful?
              </h2>
              <h2 className="about-text text text-start fw-normal lh-sm">
                That's why I developed specific material to practice
                conversation while talking about your interests.
              </h2>
              <h2 className="about-text text text-start fw-normal lh-sm">
                I offer two kinds of classes:
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
