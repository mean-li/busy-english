import '../assets/styles/faq.css'

function FAQ() {
  return (
    <>
      <section id="faq">
        <div className="bg-light rounded-container caixa-responsiva text-dark p-5 d-flex">
          {/* a div abaixo é da caixa sem background */}
          <div className="container container-responsivo d-flex align-items-center justify-content-center flex-column">
            {/* a div abaixo é dos textos */}
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-start flex-column">
                <h1 className="about-title text text-center lh-sm">
                  Perguntas já respondidas
                </h1>
                <h2 className="about-subtitle text text-start lh-sm">
                  Qual o diferencial da minha aula?
                </h2>
                <p className="about-text text text-start lh-sm">
                  O curso é personalizado para suas vontades, nele você terá
                  atenção pessoal e feedback do seu nível de speaking. Muitas
                  pessoas conseguem entender o inglês, porém, têm timidez para
                  soltar a voz; no meu curso você não precisa ter vergonha, eu
                  te guiarei conforme os melhores métodos pedagógicos para
                  melhorar sua conversação.
                </p>
                <h2 className="about-subtitle text text-start lh-sm">
                  Como eu ajusto o curso para meu nível de Inglês?
                </h2>
                <p className="about-text text text-start fw-normal lh-sm">
                  Se você não sabe seu nível, eu te enviarei um teste de
                  nivelamento para que possamos praticar com o seu conhecimento
                  e, eventualmente, avançar nos conceitos mais avançados.
                </p>
                <h2 className="about-subtitle text text-start lh-sm">
                  As aulas são preparatórias para exames de proficiência como
                  TOEFL, FCE ou IELTS?
                </h2>
                <p className="about-text text text-start fw-normal lh-sm">
                  Sim, eu ofereço aulas preparatórias de speaking voltados à
                  todos os testes de proficiência.
                </p>
                <h2 className="about-subtitle text text-start lh-sm">
                  Qual a duração das aulas de conversação?
                </h2>
                <p className="about-text text text-start fw-normal lh-sm">
                  As aulas são de 1h, mas nada te impede de fechar dois ou três
                  horários seguidos se sua vontade for de uma aula mais longa.
                </p>
                <h2 className="about-subtitle text text-start lh-sm">
                  O que acontece durante a aula?
                </h2>
                <p className="about-text text text-start fw-normal lh-sm">
                  A aula é um ambiente seguro onde você e eu podemos conversar
                  abertamente sobre tudo, eu sempre tenho tópicos e cartas na
                  manga para que nunca falte assunto, a ideia é que possamos ter
                  uma conversa agradável e descontraída, ou uma mais focada no
                  assunto específico da sua escolha.
                </p>
                <h2 className="about-subtitle text text-start lh-sm">
                  Quais são os requisitos técnicos para participar das aulas?
                </h2>
                <p className="about-text text text-start fw-normal lh-sm">
                  Ter uma conexão internet e microfone, a câmera é opcional.
                </p>
                <h2 className="about-subtitle text text-start lh-sm">
                  Sou iniciante em inglês. Posso fazer a aula?
                </h2>
                <p className="about-text text text-start fw-normal lh-sm">
                  Sim, eu ofereço materiais de conversação a partir do nível A1
                  (básico), então se você já tem certo conhecimento em inglês,
                  já pode treinar comigo.
                </p>
                <h2 className="about-subtitle text text-start lh-sm">
                  Quais personalizações estão disponíveis? Como eu personalizo o
                  curso?
                </h2>
                <p className="about-text text text-start fw-normal lh-sm d-flex flex-column ">
                  Como detalhado nos cards, eu ofereço:
                  <br />
                  1. Regular Conversation
                  <br />
                  2. Business English <br />
                  3. Travel English <br />
                  4. Proficiency Test
                </p>
              </div>
            </div>
            {/* a div abaixo é da imagem */}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
