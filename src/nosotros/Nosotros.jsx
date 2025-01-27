import './nosotros.css';
import nosotros from '../assets/nosotros.webp';
import flecha from '../assets/bottom.webp';

const Nosotros = () => {
  return (
    <div className='nosotros' id='nosotros' >
      <main>
        <div className='contenido'>
          <section>
            <h2>Sobre Nosotros</h2>
            <article>
              <p>Caysa S.R.L ha logrado satisfacer por mas de 30 años las demandas de sus clientes y 
              conseguir crecer permanentemente ofreciendo un servicio de calidad y compromiso.</p>
              <p>Hemos incorporado tecnología en maquinarias, técnicas de limpieza y personal 
              capacitado en Normas de Seguridad e Higiene que aseguran la eficiencia de las tareas
              requeridas.</p>
              <p> Nuestra trayectoria y profesionalidad han servido para consolidarnos como 
              uno de los referentes y nos posiciona dentro de un mercado altamente competitivo en 
              la ciudad de Rosario y alrededores.</p>
            </article>
            <a href="#">Conocer Más</a>
          </section>
          </div>
          <aside>
            <div className='contenedor_imagen'>
              <img src={nosotros} alt="productos de limpieza" />
            </div>
          </aside>
      </main>
      <div className='flecha'>
        <div className='linea'></div>
        <img src={flecha} alt="flecha" />
        <div className='linea'></div>
      </div>
      

        
    </div>
  )
}

export default Nosotros