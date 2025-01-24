import './servicios.css';
import React from 'react';
import alfombra from '../assets/tarjetas/alfombra.webp';
import antimanchas from '../assets/tarjetas/antimanchas.webp';
import finaldeobra from '../assets/tarjetas/final-obra.webp';
import altura from '../assets/tarjetas/limpieza-altura.webp';
import limpieza from '../assets/tarjetas/limpieza-integral.webp';
import tratamiento from '../assets/tarjetas/tratamiento-piso.webp';

import izq from '../assets/flecha-i.webp';
import der from '../assets/flecha-d.webp';



const tarjetas = [
  { id: 1, imagen: limpieza, titulo: 'Limpieza Integral y Mantenimiento', numero: '01'},
  { id: 2, imagen: tratamiento, titulo: 'Tratamiento de Pisos', numero: '02'},
  { id: 3, imagen: altura, titulo: 'Lavado de Vidrios en Altura', numero: '03'},
  { id: 4, imagen: alfombra, titulo: 'Lavado de Alfombras', numero: '04'},
  { id: 5, imagen: antimanchas, titulo: 'Tratamiento Antimanchas', numero: '05'},
  { id: 6, imagen: finaldeobra, titulo: 'Finales de Obra', numero: '06'}
];

const Servicios = () => {


  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const windowWidth = window.innerWidth;
    let distance;

    if (windowWidth > 1440) {
      distance = 450;
    } else if (windowWidth > 1150) {
      distance = 375;
    } else if (windowWidth > 768) {
      distance = 350;
    } else {
      distance = 700;
    }

    const start = current.scrollLeft;
    const end = direction === 'left' ? start - distance : start + distance;
    const duration = 500; // Duración de la animación en milisegundos
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      current.scrollLeft = start + (end - start) * progress;

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  // Cambios en el tamaño de la ventana
  window.addEventListener('resize', () => {
    scroll('left');
  });

  return (
    <div className='servicios'>

      <div className='titulo'>
        <h2>Nuestros Servicios</h2>
        <p>Brindamos un servicio de limpieza integral, permitiendo que nuestros clientes puedan
        delegar en nosotros estas tareas, quedando satisfechos por los resultados obtenidos.
        Presupuestamos un plan de trabajos acorde a sus necesidades y requerimientos, luego
        del relevamiento del lugar y en base a la información aportada por el cliente.</p>
      </div>

      <div className='slider'>
        <div className='contenedor-tarjetas' ref={scrollRef}>
          {tarjetas.map((tarjeta) => (
          <div className='tarjetas' key={tarjeta.id} style={{ backgroundImage: `url(${tarjeta.imagen})` }}>
              <section>
                <h4>{tarjeta.numero}</h4>
                <h3>{tarjeta.titulo}</h3>
              </section>
              <a href="#">Consultar</a>
          </div>
          ))}
        </div>

        <div className='contenedor-flechas'>
          <img src={izq} alt='flecha izquierda' id="left" className="flecha-izq" onClick={()=> scroll('left')}/>
          <img src={der} alt='flecha derecha' id="right" className="flecha-der" onClick={()=> scroll('right')}/>
        </div>

      </div>

    </div>
  )
}

export default Servicios