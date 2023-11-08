import './App.css';
import Header from '../Header/Header';
import RandomCharacterSelection from '../RandomCharacterSelection/RandomCharacterSelection';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { getAllCharacters } from '../../apiCalls';

function App() {
  const [allVillains, setAllVillains] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);
  const [randomVillain, setRandomVillain] = useState(0);
  const [randomHero, setRandomHero] = useState(0)

  useEffect(() => {
    getAllCharacters()
      .then((data) => {
        const villains = data.filter(character => character.biography.alignment === 'bad');
        setAllVillains(villains);
        const heroes = data.filter(character => character.biography.alignment === 'good');
        setAllHeroes(heroes);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const getRandomCharacter = characterList => characterList[Math.floor(characterList.length * Math.random())]

  const handleRandomVillainSelection = () => {
    const randomVillain = getRandomCharacter(allVillains);
    setRandomVillain(randomVillain);
  }

  const handleRandomHeroSelection = () => {
    const randomHero = getRandomCharacter(allHeroes);
    setRandomHero(randomHero);
  }

  // console.log("RANDOM HERO", randomHero);
  // console.log("RANDOM VILLAIN", randomVillain);

  return (
    <main>
      <Header />
      <RandomCharacterSelection
        handleRandomVillainSelection={handleRandomVillainSelection}
        handleRandomHeroSelection={handleRandomHeroSelection}
      />
      <CharacterDetails
        randomHero={randomHero}
        randomVillain={randomVillain}
      />
      <Footer />
    </main>
  );
}

export default App;
