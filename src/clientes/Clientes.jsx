import './clientes.css';
import clientes from '../assets/clientes.webp';
import check from '../assets/clientes-check.webp';

const Clientes = () => {
  return (
    <div className='clientes'>
      <div className='contenedor-imagen'>
        <img src={clientes} alt="oficina" />
      </div>
      <aside>
        <section className='titulo'>
          <h2>Soluciones Para <br />
             Su Industria</h2>
          <div className='textos'>
            <p>En Caysa S.R.L. brindamos nuestros servicios de higiene y mantenimiento a una amplia cartera de clientes de diversos rubros.</p>
            <p>Asesoramos tanto a pequeñas, medianas y grandes empresas como a clientes particulares.</p>
          </div>
          <a href="#">Más Información</a>
        </section>
        <div className='lista'>
          <div className='columna'>
            <div><img src={check} alt="check" /><p>Sanatorios</p></div>
            <div><img src={check} alt="check" /><p>Clínicas</p></div>
            <div><img src={check} alt="check" /><p>Concesionarios</p></div>
            <div><img src={check} alt="check" /><p>Oficinas</p></div>
            <div><img src={check} alt="check" /><p>Laboratorios</p></div>
          </div>
          <div className='columna'>
            <div><img src={check} alt="check" /><p>Centros Hospitalarios</p></div>
            <div><img src={check} alt="check" /><p>Plantas Industriales</p></div>
            <div><img src={check} alt="check" /><p>Plantas Alimenticias</p></div>
            <div><img src={check} alt="check" /><p>Edificios</p></div>
            <div><img src={check} alt="check" /><p>Centros Comerciales</p></div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Clientes