import './App.css';
import Header from '../Header/Header';
import RandomCharacterSelection from '../RandomCharacterSelection/RandomCharacterSelection';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { getAllCharacters } from '../../apiCalls';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [allVillains, setAllVillains] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((data) => {
        setAllCharacters(data);
        const villains = data.filter(character => character.biography.alignment === 'bad');
        setAllVillains(villains);
        const heroes = data.filter(character => character.biography.alignment === 'good');
        setAllHeroes(heroes);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <main>
      <Header />
      <RandomCharacterSelection
        allVillains={allVillains}
        allHeroes={allHeroes}
      />
      <CharacterDetails />
      <Footer />
    </main>
  );
}

export default App;
