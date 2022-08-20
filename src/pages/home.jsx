import { useEffect, useState } from 'react'
import NicoleImage from '../assets/images/Nicole_elipse.png'
import RetangularNicoleImage from '../assets/images/retangular_nicole.jpeg'
import '../assets/styles/home.css'
import CallButton from '../components/CallButton'

function Home() {
  const [isDesktop, setDesktop] = useState(
    window.innerWidth > 768 && window.innerWidth < 1023
  )

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768 && window.innerWidth < 1023)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <>
      <section
        id="home"
        className="bg-light text-dark p-5 d-flex caixa-responsiva align-items-center rounded-container"
      >
        {/* a div abaixo é da caixa sem background */}
        <div className="d-flex align-items-center justify-content-center container container-responsivo">
          {/* a div abaixo é da imagem */}
          <div className="me-3 home-image-container">
            {isDesktop ? (
              <img
                src={RetangularNicoleImage}
                alt="Nicole Tongu"
                className="home-image"
              />
            ) : (
              <img
                src={NicoleImage}
                alt="Nicole Tongu"
                className="home-image"
              />
            )}
          </div>

          {/* a div abaixo é dos textos e botão */}
          <div className="d-flex flex-column ms-3 text-area">
            <div className="d-flex justify-content-start flex-column">
              <h1 className="text text-start title">
                English speaking classes
              </h1>
              <h2 className="text lh-sm subtitle">
                Eu ajudo pessoas ocupadas a praticar seu inglês através da
                rotina de forma natural e eficiente. Vamos trabalhar suas
                habilidades de velocidade e pronúncia!
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
      <section className="divider-2"></section>
    </>
  )
}

export default Home
