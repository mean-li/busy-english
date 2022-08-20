import '../assets/styles/classes.css'
import TypeOneImage from '../assets/images/inverted-book.png'
import TypeTwoImage from '../assets/images/book.png'
import React, { useState, useEffect } from "react";

function Classes() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <>
      {/* <section
        id="classes"
        className="bg-primary text-dark p-5 d-flex caixa-responsiva align-items-center"
      >
      </section> */}
      <section id="classes">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-size-control"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className=""
            ></button>
          </div>
          <div className="carousel-inner carousel-container">
            <div className="carousel-item active">
              <div className="card rounded-card p-5 d-flex flex-column">
                <div className="card-body gap-3 d-flex justify-content-start flex-column">
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="card-title be-text about-title text text-center">
                      Regular Conversation
                    </h1>
                  </div>
                  <h2 className="card-text text lh-sm about-text">
                    Com base nos seus interesses eu crio um material
                    personalizado e envio para você ler - o material é um
                    pequeno texto sobre um tema, o objetivo disso é ter um tema
                    para quebrar o gelo.
                  </h2>
                </div>
                <div className="card-body d-flex justify-content-center flex-column gap-4 button-area">
                  <button className="btn btn-light-secondary custom-button-2">
                    <a
                      href="#classes"
                      aria-current="page"
                      className="button-link"
                    >
                      Saiba mais
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card rounded-card p-5 d-flex flex-column">
                <div className="card-body gap-3 d-flex justify-content-start flex-column">
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="card-title about-title text text-center">
                      Business English
                    </h1>
                  </div>
                  <h2 className="card-text text lh-sm about-text">
                    Vamos aprender novos vocabulários focados no ambiente
                    corporativo, saber apresentar suas ideias, falar em uma
                    entrevista de emprego e muito mais!
                  </h2>
                </div>
                <div className="card-body d-flex justify-content-center flex-column gap-4 button-area">
                  <button className="btn btn-light-secondary custom-button-2">
                    <a
                      href="#classes"
                      aria-current="page"
                      className="button-link"
                    >
                      Saiba mais
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card rounded-card p-5 d-flex flex-column">
                <div className="card-body gap-3 d-flex justify-content-start flex-column">
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="card-title about-title text text-center">
                      Travel English
                    </h1>
                  </div>
                  <h2 className="card-text text lh-sm about-text">
                    Vai viajar e não quer passar vergonha ao pedir num
                    restaurante? Essa aula foi feita pra você! Aprenda o
                    vocabulário típico dos nativos.
                  </h2>
                </div>
                <div className="card-body d-flex justify-content-center flex-column gap-4 button-area">
                  <button className="btn btn-light-secondary custom-button-2">
                    <a
                      href="#classes"
                      aria-current="page"
                      className="button-link"
                    >
                      Saiba mais
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card rounded-card p-5 d-flex flex-column">
                <div className="card-body gap-3 d-flex justify-content-start flex-column">
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="card-title about-title text text-center">
                      Proficiency Test
                    </h1>
                  </div>
                  <h2 className="card-text text lh-sm about-text">
                    A maioria dos testes de proficiência da língua inglesa
                    requerem uma prova oral. Se você pretende prestar o TOEFL,
                    FCE e outros, essa aula é para você!
                  </h2>
                </div>
                <div className="card-body d-flex justify-content-center flex-column gap-4 button-area">
                  <button className="btn btn-light-secondary custom-button-2">
                    <a
                      href="#classes"
                      aria-current="page"
                      className="button-link"
                    >
                      Saiba mais
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isDesktop ?
            <div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> : ""}

        </div>
      </section>
      <section className="divider-2"></section>
    </>
  )
}

export default Classes
