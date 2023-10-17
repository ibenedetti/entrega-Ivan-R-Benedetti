import capyLogo from '../images/capybara-logo.png';
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
                        <button className="util-btn">Remeras</button>
                    </li>
                    <li>
                        <button className="util-btn">Camperas</button>
                    </li>
                    <li>
                        <button className="util-btn">Pantalones</button>
                    </li>
                    <li>
                        <button className="util-btn">Accesorios</button>
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