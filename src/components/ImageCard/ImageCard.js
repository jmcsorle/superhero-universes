import './ImageCard.css';
import PropTypes from 'prop-types';

function ImageCard({ character }) {
    return (
        <div className="character-image">
            <img src={character.imageMD} alt={character.name} />
        </div>
    )
}

export default ImageCard;

ImageCard.propTypes = {
    character: PropTypes.shape({
      id: PropTypes.number.isRequired,
      powerstats: PropTypes.shape({
        intelligence: PropTypes.number.isRequired,
        strength: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
        durability: PropTypes.number.isRequired,
        power: PropTypes.number.isRequired,
        combat: PropTypes.number.isRequired,
      }),
      name: PropTypes.string.isRequired,
      imageMD: PropTypes.string.isRequired,
      imageLG: PropTypes.string.isRequired,
      race: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      alignment: PropTypes.string.isRequired,
      groupAffiliation: PropTypes.string.isRequired,
    }),
  };