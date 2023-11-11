import './CharacterDetails.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import ImageCard from '../ImageCard/ImageCard';
import Quiz from '../Quiz/Quiz';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterDetails({ filteredData }) {
  const { id } = useParams();

  function getCharacterById(id) {
    return filteredData.find((character) => {
      return character.id === id;
    });
  }

  let currentCharacter = getCharacterById(parseInt(id));

  if (!currentCharacter) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="character-details">
      <ImageCard character={currentCharacter} className="character-image" />
      <DetailsCard
        character={currentCharacter}
        className="random-details-card"
      />
      <Quiz character={currentCharacter} className="quiz-container" />
    </div>
  );
}

export default CharacterDetails;

CharacterDetails.propTypes = {
  filteredData: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

