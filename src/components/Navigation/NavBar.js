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