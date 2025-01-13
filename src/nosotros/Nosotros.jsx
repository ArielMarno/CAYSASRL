import './nosotros.css';
import nosotros from '../assets/nosotros.webp';
import flecha from '../assets/bottom.webp';

const Nosotros = () => {
  return (
    <div className='nosotros'>
      <main>
        <div className='contenido'>
          <section>
            <h2>Sobre Nosotros</h2>
            <p>En Rosario, allá por 1994, al ritmo de la ciudad y la demanda de un mercado creciente y altamente competitivo nace Caysa S.R.L.</p>
            <p>A través de los años hemos incorporando tecnología, técnicas de limpieza y excelencia en recursos humanos para dar soluciones integrales a empresas y emprendimientos de diversos rubros.
            <br />Estamos comprometidos a consolidar nuestra imagen brindando en cada ocasión un servicio de calidad y garantizando la plena satisfacción a nuestros clientes.</p>
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