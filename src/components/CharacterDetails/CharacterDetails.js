import './CharacterDetails.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import ImageCard from '../ImageCard/ImageCard';
import Quiz from '../Quiz/Quiz';
// import ErrorComponent from '../ErrorComponent/ErrorComponent';
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

  // if (!currentCharacter) {
  //   return (
  //     <ErrorComponent error={`Character with ID ${id} not found.`} />
  //   )
  // }

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
