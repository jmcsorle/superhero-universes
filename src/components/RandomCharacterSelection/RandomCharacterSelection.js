import './RandomCharacterSelection.css';
import heroImage from '../../assets/CapMerica.png';
import villainImage from '../../assets/Joker.png';
import PropTypes from 'prop-types';

function RandomCharacterSelection({
  handleRandomHeroSelection,
  handleRandomVillainSelection,
}) {
  
  return (
    <div className="random-container">
      <p className="introduction-text">
        How well do you know Superheroes and Supervillains?
      </p>
      <div tabIndex="0" className="random-hero">
        <button onClick={handleRandomHeroSelection} className="hero-button">
          <h2 className="hero-heading">
            Choose a<br />
            Random Hero
          </h2>
          <div className="hero-image">
            <img src={heroImage} alt="" />
          </div>
        </button>
      </div>
      <div tabIndex="0" className="random-villain">
        <button
          onClick={handleRandomVillainSelection}
          className="villain-button"
        >
          <h2 className="villain-heading">
            Choose a<br />
            Random Villain
          </h2>
          <div className="villain-image">
            <img src={villainImage} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default RandomCharacterSelection;

RandomCharacterSelection.propTypes = {
  handleRandomHeroSelection: PropTypes.func.isRequired,
  handleRandomVillainSelection: PropTypes.func.isRequired,
};
