import Imagem1 from '../assets/futbal.jpg'
import Imagem2 from '../assets/futbal2.jpg'
import Imagem3 from '../assets/futbal3.jpg'
import Imagem4 from '../assets/futbal4.jpg'
import Imagem5 from '../assets/futbal5.jpg'
import Imagem6 from '../assets/futbal6.jpg'
import Imagem7 from '../assets/futbal7.jpg'
import Imagem8 from '../assets/futbal8.jpg'
import Imagem9 from '../assets/futbal9.jpg'
import Imagem10 from '../assets/futbal10.jpg'

import '../css/Loja.css'

const Home =()=>{
    return(
        <>
        <header>
            <h1>Loja City</h1>
        </header>
        <main>
            <article className="produto-grid">
                <section className="produto-item spam-row-2">
                    <img src={Imagem1} alt="Produto-1" id='image'/>
                    <div>
                        <h3>Produto-1</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className='produto-item spam-col-2'>
                    <img src={Imagem2} alt="Produto-2" id='image'/>
                    <div>
                        <h3>Produto-2</h3>
                        <p>R$ 250,00</p>
                    </div>
                </section>


                <section className="produto-item span-row-2">
                    <img src={Imagem3} alt="Produto-3" id='image'/>
                    <div>
                        <h3>Produto-3</h3>
                        <p>R$ 300,00</p>
                    </div>
                </section>

                <section className="produto-item span-col-2">
                    <img src={Imagem4} alt="Produto-4" id='image'/>
                    <div>
                        <h3>Produto-4</h3>
                        <p>R$ 400,00</p>
                    </div>
                </section>

                <section className="produto-item span-row-2">
                <img src={Imagem5} alt="Produto-5" id='image'/>
                    <div>
                        <h3>Produto-5</h3>
                        <p>R$ 500,00</p>
                    </div>
                </section>


                <section className="produto-item">
                <img src={Imagem6} alt="Produto-6" id='image'/>
                    <div>
                        <h3>Produto-6</h3>
                        <p>R$ 600,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src={Imagem7} alt="Produto-7" id='image'/>
                    <div>
                        <h3>Produto-7</h3>
                        <p>R$ 700,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src={Imagem8} alt="Produto-8" id='image'/>
                    <div>
                        <h3>Produto-8</h3>
                        <p>R$ 800,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src={Imagem9} alt="Produto-9"id='image'/>
                    <div>
                        <h3>Produto-9</h3>
                        <p>R$ 750,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src={Imagem10} alt="Produto-10" id='image'/>
                    <div>
                        <h3>Produto-10</h3>
                        <p>R$ 1000,00</p>
                    </div>
                </section>



            </article>
        </main>
        </>
    )

}
export default Home

