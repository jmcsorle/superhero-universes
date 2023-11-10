import './Header.css';
import banner from '../../assets/Banner.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="mdcHeader">
            <h1 className="sr-only">Marvel versus DC</h1>
            <Link className="home-link" to="/">
            <img src={banner} alt="Marvel vs. DC" />
            </Link>

        </header>
        
    )
}

export default Header;