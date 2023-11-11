import './CharacterDetails.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import ImageCard from '../ImageCard/ImageCard';
import Quiz from '../Quiz/Quiz';
import { useParams } from 'react-router-dom';

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
