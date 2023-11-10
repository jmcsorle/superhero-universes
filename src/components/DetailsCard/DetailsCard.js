import './DetailsCard.css';

function DetailsCard({ character }) {
  return (
    <div className="random-details-card">
      <h2>{character.name}</h2>
      {/* <p>{`${character.name}, also known as ${character.biography.fullName}, is part of the ${character.appearance.race} race. This character is ${character.appearance.height[0]} tall and weighs ${character.appearance.weight[0]}s.`}</p> */}
      {/* <p>{`${character.name}'s powerstats are:`}</p> */}
      <p>Powerstats:</p>
      <ul>
        <li>Intelligence = {`${character.powerstats.intelligence}`}</li>
        <li>Strength = {`${character.powerstats.strength}`}</li>
        <li>Speed = {`${character.powerstats.speed}`}</li>
        <li>Durability = {`${character.powerstats.durability}`}</li>
        <li>Power = {`${character.powerstats.power}`}</li>
        <li>Combat = {`${character.powerstats.combat}`}</li>
      </ul>
    </div>
  );
}

export default DetailsCard;
