import capyLogo from '../images/capybara-logo.png';
import { Link } from 'react-router-dom';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img  className='logo-img'  src={capyLogo} width={'150px'} alt="Capybara Logo" />
                <Link to={"/"}>
                    <h1>
                        Buff Capybara
                    </h1>
                </Link>                 
            </div>
            
            <div className="navbar__links">
                <ul>
                <Link to={"/category/men's clothing"} className="util-btn">
                    Hombre
                </Link>
                <Link to={"/category/women's clothing"} className="util-btn">
                    Mujer
                </Link>
                <Link to={"/category/jewelery"} className="util-btn">
                    Accesorios
                </Link>
                <Link to={"/category/electronics"} className="util-btn">
                    Electronicos
                </Link>
                </ul>                
            </div>
            <div className='cart'>
                <Link to={"/cart"} className="util-btn">
                <CartWidget/>
                </Link>
            </div>            
        </div>        
    )
};

export default Navbar;