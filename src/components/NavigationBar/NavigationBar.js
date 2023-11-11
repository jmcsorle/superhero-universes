import './NavigationBar.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationBar({ setRandomHero, setRandomVillain }) {
  const location = useLocation();
  const handleHomeClick = () => {
    setRandomHero({});
    setRandomVillain({});
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

NavigationBar.propTypes = {
  setRandomHero: PropTypes.func.isRequired,
  setRandomVillain: PropTypes.func.isRequired,
}