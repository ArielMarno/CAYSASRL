import './footer.css';
import logo from '../assets/logo.webp';
import check from '../assets/clientes-check.webp';
import wsp from '../assets/redes/wsp-icon.webp';
import ig from '../assets/redes/ig-icon.webp';
import fb from '../assets/redes/fb-icon.webp';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer_contenido'>
        <div className='logo'>
          <img src={logo} alt="CAYSA SRL logo" />
          <p>Su imagen, nuestra imagen.</p>
          <div className='redes'>
            <a href="https://wa.link/olf7mo"><img src={wsp} alt="whatsapp" /></a>
            <a href="https://www.instagram.com/caysa.ok"><img src={ig} alt="instagram" /></a>
            <a href="#"><img src={fb} alt="facebook" /></a>
          </div>
          <div className='ubicacion'>
              <h4>Ubicación</h4>
              <p>Cochabamba 1555 - Rosario, Santa Fe.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.7580232210453!2d-60.650112523694844!3d-32.9573974735889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab0db8deedd9%3A0x50ef8f245ae83fa2!2sCochabamba%201555%2C%20S2000DWO%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1737765010574!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mapa'></iframe>
          </div>
        </div>
        <div className='industria'>
           <h4>Soluciones Para Su Industria</h4>
            <div><img src={check} alt="check" /><p>Sanatorios</p></div>
            <div><img src={check} alt="check" /><p>Clínicas</p></div>
            <div><img src={check} alt="check" /><p>Concesionarios</p></div>
            <div><img src={check} alt="check" /><p>Oficinas</p></div>
            <div><img src={check} alt="check" /><p>Laboratorios</p></div>
            <div><img src={check} alt="check" /><p>Centros Hospitalarios</p></div>
            <div><img src={check} alt="check" /><p>Plantas Industriales</p></div>
            <div><img src={check} alt="check" /><p>Plantas Alimenticias</p></div>
            <div><img src={check} alt="check" /><p>Edificios</p></div>
            <div><img src={check} alt="check" /><p>Centros Comerciales</p></div>           
        </div>
        <div className='navegador'>
            <h4>Navegador</h4>
            <a href="#">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#clientes">Clientes</a>
            <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div className='footer_contacto'>
          <h4>Contactanos</h4>
          <div className='contactanos'>
            <div className='item'>
              <h5>Email</h5>
              <p>caysa-srl@hotmail.com</p>
            </div>
            <div className='item'>
              <h5>Envianos tu CV</h5>
              <p>caysa.rrhh@hotmail.com</p>
            </div>
            <div className='item'>
                <h5>Teléfono</h5>
                <p>4821790 - 3412120556</p>
            </div>
          </div>
      </div>

      <div className='copy'>
          <p>© 2025 CAYSA S.R.L. Todos los derechos reservados.</p>
          <div className='sunflower'>
            <p>Diseñado y desarrollado por</p><a href="https://sunfloweragencia.com">SunFlower Agencia.</a>
          </div>
      </div>
    </div>
  )
}

export default Footer