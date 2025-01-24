import './galeria.css';

import uno from '../assets/galeria/galeria1.webp';
import dos from '../assets/galeria/galeria2.webp';
import tres from '../assets/galeria/galeria3.webp';
import cuatro from '../assets/galeria/galeria4.webp';
import cinco from '../assets/galeria/galeria5.webp';
import seis from '../assets/galeria/galeria6.webp';

const Galeria = () => {
  return (
    <div className='galeria'>
      <div className='galeria__item'><img src={uno} alt="tratamiento del piso" /></div>
      <div className='galeria__item'><img src={dos} alt="limpieza de balcón" /></div>
      <div className='galeria__item'><img src={tres} alt="limpieza de baños" /></div>
      <div className='galeria__item'><img src={cuatro} alt="limpieza en altura" /></div>
      <div className='galeria__item'><img src={cinco} alt="instructivo de seguridad" /></div>
      <div className='galeria__item'><img src={seis} alt="limpieza de vidrios" /></div>
    </div>
  )
}

export default Galeria