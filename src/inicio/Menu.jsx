import './menu.css';

const Menu = (props) => {
  return (
    <label className="bar" htmlFor="check">
        <input type="checkbox" id="check" placeholder='checkbox' onClick={props.handleClick}/>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
    </label>
  )
}

export default Menu