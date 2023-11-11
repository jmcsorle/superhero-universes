import './DetailsCard.css';

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
