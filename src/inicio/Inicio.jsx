import './inicio.css';
import { React, useState } from 'react';
import Menu from './Menu';
import logo from '../assets/logo.webp';
import inicio from '../assets/inicio.webp';

const Inicio = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }

  return (
    <div className='inicio'>
      <nav>
        <div className='logo'>
            <img src={logo} alt="CAYSA" />
        </div>
        <div className={`enlaces ${click ? 'activo' : ''}`}>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#clientes">Clientes</a>
          <a href="#contacto">Contacto</a> 
        </div>
        <div className="menu">
          <Menu handleClick={handleClick}/> 
        </div>
      </nav>
      <main>
        <div className='inicio_imagen'>
            <img src={inicio} alt="personal de limpieza" />
        </div>
        <aside>
          <div className='contenido'>
            <h4>Nro. 1 En Servicios De Limpieza</h4>
            <h1>
              Somos Lideres <br />
              En La Industria De <br />
              La Limpieza
            </h1>
            <p>Te ofrecemos un amplio rango de servicios <br /> que se amoldan a tus necesidades.</p>
            <div className='contenedor_btn'>
              <a href="#">Presupuesto</a>
              <a href="#">Contactarse</a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default Inicio