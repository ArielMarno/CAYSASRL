import './formulario.css';
import guante from '../assets/contacto.webp';

const Formulario = () => {
  return (
    <div className='contacto'>
      <main>
        <div className='formulario'>
          <div className='contenido'>
            <h2>Transforma Tu Espacio</h2>
            <p>Si te gustaría coordinar una reunión o que visitemos tu negocio podes dejarnos tu email y nos comunicaremos a la brevedad.</p>
            <form action="https://formspree.io/f/xjkgvlkz" method="POST">
              <input type="email" id="email" name="email" placeholder='Email' required />
              <button type="submit" className='enviar-formulario'>Enviar</button>
            </form>
          </div>
        </div>
        <aside>
          <img src={guante} alt="guante" />
        </aside>
      </main>
    </div>
  )
}

export default Formulario