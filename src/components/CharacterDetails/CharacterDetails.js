import './CharacterDetails.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import ImageCard from '../ImageCard/ImageCard';
import Quiz from '../Quiz/Quiz';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../apiCalls';

function CharacterDetails() {
  const { id } = useParams();
  const [currentCharacter, setCurrentCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(id)
      .then((data) => setCurrentCharacter(data))
      .catch((error) => console.log(error.message));
  }, [id]);

  if (!currentCharacter) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="character-details">
      <ImageCard character={currentCharacter} />
      <DetailsCard character={currentCharacter} />
      <Quiz character={currentCharacter} />
    </div>
  );
}

export default CharacterDetails;
