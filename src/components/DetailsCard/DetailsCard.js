import './DetailsCard.css';
import PropTypes from 'prop-types';

function DetailsCard({ character }) {
  return (
    <div className="random-details-card">
      <div>
        <h2>{character.name}</h2>
        <p>{`${character.name}, also known as ${character.fullName}, is part of the ${character.race} race. This character is ${character.height} tall and weighs ${character.weight}s.`}</p>
        <p className="power-stats">{`${character.name}'s powerstats are:`}</p>
        <ul>
          <li>Intelligence = {`${character.powerstats.intelligence}`}</li>
          <li>Strength = {`${character.powerstats.strength}`}</li>
          <li>Speed = {`${character.powerstats.speed}`}</li>
          <li>Durability = {`${character.powerstats.durability}`}</li>
          <li>Power = {`${character.powerstats.power}`}</li>
          <li>Combat = {`${character.powerstats.combat}`}</li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsCard;

DetailsCard.propTypes = {
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
