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
                Hi, I'm Lindie, a multilingual YouTuber, language coach and UX
                designer.
              </h1>
              <h1 className="about-subtitle text text-start lh-sm">
                My background
              </h1>
              <h2 className="about-text text text-start lh-sm">
                I was born in South Africa, and grew up in Pakistan, France, the
                UAE and Japan, and now I’m in Singapore. I’ve always been
                fascinated by the possibilities that language offers to break
                down barriers and connect with people. As such, my passion in
                life is learning languages, and sharing my methods with others.
              </h2>
            </div>
          </div>
          {/* a div abaixo é da imagem */}
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-start flex-column">
              <h1 className="about-subtitle text text-start lh-sm">
                What I do
              </h1>
              <h2 className="about-text text text-start fw-normal lh-sm">
                Since 2009, I have immersed myself in languages and developing
                efficient learning methods. Since then, I’ve learned over 10
                languages to varying levels, appeared on international news in
                Hungarian, Korean, English and Afrikaans, spoken at multiple
                conferences, coached over 50 people in language learning and
                mindsets, and am currently designing Kaards, a language app.
              </h2>
              <h2 className="about-text text text-start fw-normal lh-sm">
                I share my language process and progress on YouTube to an
                audience of over 306K+, and run a Monthly Language Roundup
                newsletter to over 3,900 subscribers. On the side, I coach
                language learners on time management, resources and
                productivity.
              </h2>
              <h2 className="about-text text text-start fw-normal lh-sm">
                Thanks for stopping by, and feel free to say hi!
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
