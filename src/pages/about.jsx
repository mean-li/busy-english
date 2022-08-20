import '../assets/styles/about.css'

function About() {
  return (
    <>
      <section
        id="about"
      >
        <div className="bg-light rounded-container caixa-responsiva text-dark p-5 d-flex">
          {/* a div abaixo é da caixa sem background */}
          <div className="container container-responsivo d-flex align-items-center justify-content-center flex-column">
            {/* a div abaixo é dos textos */}
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-start flex-column">
                <h1 className="about-title text text-start lh-sm">
                  Oii, meu nome é Nicole :)
                </h1>
                <h2 className="about-subtitle text text-start lh-sm">
                  Meu histórico
                </h2>
                <h3 className="about-text text text-start lh-sm">
                  Eu sou uma estudante de economia que adora ensinar e aprender
                  idiomas! Eu estudo inglês desde os 9 anos de idade, foi paixão à
                  primeira vista! Fiz o First Cambridge Certificate - um teste
                  internacional que nivela seu inglês - e meu nível de conversação
                  era C1 (fluente); é por isso que gosto de ensinar habilidades de
                  conversação!
                </h3>
              </div>
            </div>
            {/* a div abaixo é da imagem */}
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-start flex-column">
                <h1 className="about-subtitle text text-start lh-sm">
                  O que eu faço
                </h1>
                <h2 className="about-text text text-start fw-normal lh-sm">
                  Ao longo da minha carreira como professora notei que a maior
                  parte dos alunos teve a parte da conversação negligenciada;
                  aprender a gramática de uma língua é realmente importante, mas
                  na vida real se você aprende uma língua mas não consegue
                  falar... então para que isso foi útil?
                </h2>
                <h2 className="about-text text text-start fw-normal lh-sm">
                  Por isso desenvolvi um material específico para praticar a
                  conversação enquanto fala sobre seus interesses.
                </h2>
                <h2 className="about-text text text-start fw-normal lh-sm">
                  Eu ofereço diversos tipos de aulas:
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
