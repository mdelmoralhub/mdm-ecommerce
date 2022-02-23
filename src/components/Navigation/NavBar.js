import { Link } from 'react-router-dom'
import { GenericWidget } from '../GenericWidget/GenericWidget'
const NavBar = () =>  {
    const itemClassName = "nav-item";
    return (
      <div>
        <h2>MdM-Commerce App</h2>
        <nav className="NavBarTitle">
          <ul>
            <Link to="/"><li className="nav-item active">Home</li></Link>
            <Link className={itemClassName} to="/category/Electronica"><li>Electronica</li></Link>
            <Link className={itemClassName} to="/category/Carniceria"><li>Carniceria</li></Link>
            <Link className={itemClassName} to="/category/Biblioteca"><li>Biblioteca</li></Link>
            <Link className={itemClassName} to="/category/Eventos"><li>Eventos</li></Link>
          </ul> 
        </nav>
        <div>
          <GenericWidget></GenericWidget>
          <p><b>Productos Disponibles</b></p>
        </div>
      </div>
    );
};

export default NavBar;

/*<a className={itemClassName} href="/home/">home</a>
          <a className={itemClassName} href="/products/">Products</a>
	        <a className={itemClassName} href="/about/">About</a>
	        <a className={itemClassName} href="/our-team/">Our Team</a>
	        <a className={itemClassName} href="/contact-us/">Contact Us</a>*/

          /*<Link to='/'>Home</Link>
            <Link to='/products'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>*/