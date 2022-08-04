import '../assets/styles/type2.css'

function Type2 (){
    return(
        <section 
        className="caixa-responsiva text-dark p-5 d-flex align-items-center bg-primary ">
            <div className="type2-container container-responsivo container d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column me-3 text-area">
                    <div className="d-flex justify-content-start flex-row">
                        <div>

                   <h1 className="type2-title text text-star lh-sm">
                    Type 2
                   </h1>

                   <h2 className="type2-text text text-start lh-sm">
                   You choose a specific vocabulary you want to practice,
                   for example: business english, traveling english... 
                   I'll send you a material with the new vocabulary 
                   so you can study. In the class we're going to practice 
                   that with realistic situations.
                    </h2>
                       </div>

                    <img
                 className="type2-image"
                 src= "src/assets/images/livros2.jpg">
                 </img>

                    </div>
                    </div>            
        
           </div>

        </section>
    )
}

export default Type2
