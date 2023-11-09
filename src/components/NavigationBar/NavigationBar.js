import './NavigationBar.css';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar({ setRandomHero, setRandomVillain }) {
  const location = useLocation();
  const handleHomeClick = () => {
    setRandomHero(0);
    setRandomVillain(0);
  };

  return (
    <div>
      {location.pathname !== '/' && (
        <Link className="home-link" to="/" onClick={handleHomeClick}>
          Home
        </Link>
      )}
    </div>
  );
}

export default NavigationBar;
