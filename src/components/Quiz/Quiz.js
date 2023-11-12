import './Quiz.css';
import marvelButton from '../../assets/Marvel_Button.png';
import dcButton from '../../assets/DC_Button.png';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Quiz({ character }) {
  const [feedback, setFeedback] = useState('');
  const [showAffiliations, setShowAffiliations] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === `${character.publisher}`) {
      const correct = `Yes! ${character.name} is from the ${character.publisher} Universe!`;
      setFeedback(correct);
      setShowAffiliations(true);
    } else {
      const wrong = `No, ${character.name} is from the ${character.publisher} Universe.`;
      setFeedback(wrong);
      setShowAffiliations(true);
    }
  };

  const affiliations = `${character.groupAffiliation}`;
  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="question-container">
          <p className="quiz-question">{`Is ${character.name} from the Marvel Universe or the DC Universe?`}</p>
          <p className="quiz-question">
            Choose a button below to reveal the answer.
          </p>
        </div>
        <div className="button-container">
          <button onClick={() => handleAnswer('Marvel Comics')}>
            <img src={marvelButton} alt="Marvel Universe" />
          </button>
          <button onClick={() => handleAnswer('DC Comics')}>
            <img src={dcButton} alt="DC Universe" />
          </button>
        </div>
        <div className="answer-container">
          {feedback && <p className="feedback">{feedback}</p>}
          {showAffiliations && <p className="feedback">Affliations include: <br />{affiliations}</p>}
        </div>
      </div>
    </div>
  );
}

export default Quiz;

Quiz.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    powerstats: PropTypes.shape({
      intelligence: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      durability: PropTypes.number.isRequired,
      power: PropTypes.number.isRequired,
      combat: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
    imageMD: PropTypes.string.isRequired,
    imageLG: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    alignment: PropTypes.string.isRequired,
    groupAffiliation: PropTypes.string.isRequired,
  }),
};
