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
  const [filteredData, setFilteredData] = useState([]);
  const [allVillains, setAllVillains] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);
  const [randomVillain, setRandomVillain] = useState(0);
  const [randomHero, setRandomHero] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCharacters()
      .then((data) => {
        const publishers = data.filter(
          (character) =>
            character.biography.publisher === 'Marvel Comics' ||
            character.biography.publisher === 'DC Comics'
        );

        const getHeroVillain = publishers.filter(
          (character) =>
            character.biography.alignment === 'good' ||
            character.biography.alignment === 'bad'
        );

        const isValid = (value => value && value !== '-' && value !== 'undefined');

        const cleanData = getHeroVillain.map((character) => {
          const hasRequiredValues =
            character.powerstats &&
            isValid(character.appearance.race) &&
            isValid(character.appearance.height[0]) &&
            isValid(character.appearance.weight[0]) &&
            character.images.md &&
            character.images.lg &&
            character.biography.publisher &&
            isValid(character.biography.fullName) &&
            character.biography.alignment &&
            isValid(character.connections.groupAffiliation);

          return hasRequiredValues
            ? {
                key: character.id,
                id: character.id,
                powerstats: character.powerstats,
                name: character.name,
                imageMD: character.images.md,
                imageLG: character.images.lg,
                race: character.appearance.race,
                height: character.appearance.height[0],
                weight: character.appearance.weight[0],
                publisher: character.biography.publisher,
                fullName: character.biography.fullName,
                alignment: character.biography.alignment,
                groupAffiliation: character.connections.groupAffiliation,
              }
            : null;
        });

        const finalData = cleanData.filter((character) => character !== null);

        setFilteredData(finalData);

        const villains = finalData.filter(
          (character) => character.alignment === 'bad'
        );
        const heroes = finalData.filter(
          (character) => character.alignment === 'good'
        );

        setAllVillains(villains);
        setAllHeroes(heroes);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
          element={<CharacterDetails filteredData={filteredData} />}
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
