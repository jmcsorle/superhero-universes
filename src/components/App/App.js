import './App.css';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import RandomCharacterSelection from '../RandomCharacterSelection/RandomCharacterSelection';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import Footer from '../Footer/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllCharacters } from '../../apiCalls';

function App() {
  const [allVillains, setAllVillains] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);
  const [randomVillain, setRandomVillain] = useState(0);
  const [randomHero, setRandomHero] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCharacters()
      .then((data) => {
        const villains = data.filter(
          (character) => character.biography.alignment === 'bad'
        );
        setAllVillains(villains);
        const heroes = data.filter(
          (character) => character.biography.alignment === 'good'
        );
        setAllHeroes(heroes);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const getRandomCharacter = (characterList) =>
    characterList[Math.floor(characterList.length * Math.random())];

  const handleRandomVillainSelection = () => {
    const randomVillain = getRandomCharacter(allVillains);
    setRandomVillain(randomVillain);
    navigate(`/characterDetails/${randomVillain.id}`);
  };

  const handleRandomHeroSelection = () => {
    const randomHero = getRandomCharacter(allHeroes);
    setRandomHero(randomHero);
    navigate(`/characterDetails/${randomHero.id}`);
  };

  return (
    <main>
      <Header />
      <NavigationBar
        setRandomVillain={setRandomVillain}
        setRandomHero={setRandomHero}
      />
      <Routes>
        <Route
          path="/"
          element={
            <RandomCharacterSelection
              handleRandomVillainSelection={handleRandomVillainSelection}
              handleRandomHeroSelection={handleRandomHeroSelection}
            />
          }
        />
        <Route
          path="/characterDetails/:id"
          element={<CharacterDetails />}
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
