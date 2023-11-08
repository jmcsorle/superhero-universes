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
      })
      .catch((error) => console.log(error.message));
  }, []);

  console.log('ALL Characters', allCharacters);

  const getAllVillains = () => {
    return allCharacters.reduce((acc, character) => {
      if (character.biography.alignment === 'bad') {
        acc.push(character.id);
      }
      // setAllVillains(acc)
      return acc;
    }, []);
  };

  const getAllHeroes = () => {
    return allCharacters.reduce((acc, character) => {
      if (character.biography.alignment === 'good') {
        acc.push(character.id);
      }
      return acc;
    }, [])
  }

  console.log('VILLIAINS', getAllVillains());
  console.log('HEROES', getAllHeroes());

  return (
    <main>
      <Header />
      <RandomCharacterSelection allCharacters={allCharacters} />
      <CharacterDetails />
      <Footer />
    </main>
  );
}

export default App;
