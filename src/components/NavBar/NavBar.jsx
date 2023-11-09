import capyLogo from '../images/capybara-logo.png';
import { Link } from 'react-router-dom';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img    src={capyLogo} width={'150px'} alt="Capybara Logo" />
                <h1>Buff Capybara</h1>                 
            </div>
            
            <div className="navbar__links">
                <ul>
                    <li>
                        <Link to={"/category/men's-clothing"} className="util-btn">
                            Hombre
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/women's-clothing"} className="util-btn">
                            Mujer
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/jewelry"} className="util-btn">
                            Accesorios
                        </Link>
                    </li>
                    <li>
                        <Link to={"/category/electonics"} className="util-btn">
                            Electronicos
                        </Link>
                    </li>
                </ul>                
            </div>
            <div className='cart'>
                <CartWidget/>
            </div>            
        </div>        
    )
};

export default Navbar;