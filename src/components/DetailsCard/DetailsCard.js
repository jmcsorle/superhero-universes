import './DetailsCard.css';

function DetailsCard({ character }) {
  return (
    <div className="random-details-card">
      <h2>{character.name}</h2>
      <p>{}</p>
      <p>{`{character.name}'s powerstats are:`}</p>
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
