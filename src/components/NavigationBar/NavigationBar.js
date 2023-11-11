import './NavigationBar.css';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar({ setRandomHero, setRandomVillain, error }) {
  localStorage.removeItem('currentCharacter');
  const location = useLocation();
  const handleHomeClick = () => {
    setRandomHero(0);
    setRandomVillain(0);
  };

  return (

    <div className="nav-bar">
      {location.pathname !== '/' && (
        <Link className="home-link" to="/" onClick={handleHomeClick}>
          Choose Another Character
        </Link>
        )}
    </div>
  );
}

export default NavigationBar;
