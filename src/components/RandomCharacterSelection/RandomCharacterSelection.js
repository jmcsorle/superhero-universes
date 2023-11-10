import './RandomCharacterSelection.css';
import heroImage from '../../assets/CapMerica.png';
import villainImage from '../../assets/Joker.png';

function RandomCharacterSelection( { handleRandomHeroSelection, handleRandomVillainSelection } ) {
    
    return (
        <div className="random-container">
            <p>How well do you know superheroes and supervillains?</p>
            <div className="random-hero">
                <button onClick={handleRandomHeroSelection}>
                <h2 className="hero-heading">Choose a Random Hero</h2>
                <div className="hero-image">
                <img src={heroImage} alt="" />
                </div>
                </button>
            </div>
            <div className="random-villain">
                <button onClick={handleRandomVillainSelection}>
                    <h2 className="villain-heading">Choose a Random Villain</h2>
                    <div className="villain-image">
                    <img src={villainImage} alt="" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default RandomCharacterSelection;