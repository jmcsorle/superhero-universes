import './RandomCharacterSelection.css';
import heroImage from '../../Assets/CapMerica.png';
import villainImage from '../../Assets/Joker.png';

function RandomCharacterSelection( { handleRandomHeroSelection, handleRandomVillainSelection } ) {

    
    return (
        <div className="random-container">
            <p>How well do you know superheroes and supervillains?</p>
            <div className="random-hero">
                <button onClick={handleRandomHeroSelection}>
                <h2 className="hero-heading">Choose a Random Hero</h2>
                <img src={heroImage} alt="" />
                </button>
            </div>
            <div className="random-villain">
                <button onClick={handleRandomVillainSelection}>
                    <h2>Choose a Random Villain</h2>
                    <img src={villainImage} alt="" />
                </button>
            </div>
        </div>
    )
}

export default RandomCharacterSelection;