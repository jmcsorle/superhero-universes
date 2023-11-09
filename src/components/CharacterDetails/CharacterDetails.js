import './CharacterDetails.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import ImageCard from '../ImageCard/ImageCard';

function CharacterDetails({ randomHero, randomVillain }) {
  if (randomHero) {
    return (
      <div className="random-hero">
        <ImageCard character={randomHero} />
        <DetailsCard character={randomHero} />
      </div>
    );
  } else {
    return (
      <div className="random-villain">
        <ImageCard character={randomVillain} />
        <DetailsCard character={randomVillain} />
      </div>
    );
  }
}

export default CharacterDetails;
