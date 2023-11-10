import './Quiz.css';
import marvelButton from '../../assets/Marvel_Button.png';
import dcButton from '../../assets/DC_Button.png';
import { useState } from 'react';

function Quiz({ character }) {
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (answer) => {
    if (answer === `${character.publisher}`) {
      const correct = `Yes! ${character.name} is from the ${character.publisher} Universe! Their affiliations include: ${character.groupAffiliation}.`;
      setFeedback(correct);
    } else {
      const wrong = `No, ${character.name} is from the ${character.publisher} Universe. Affiliations include: ${character.groupAffiliation}.`;
      setFeedback(wrong);
    }
  };

  return (
    <div>
      <div className="question-container">
        <p className="quiz-question">{`Is ${character.name} from the Marvel Universe or the DC Universe? Choose a button below to reveal the answer.`}</p>
      </div>
      <div className="button-container">
        <button onClick={() => handleAnswer('Marvel Comics')}>
          <img src={marvelButton} alt="Marvel Universe" />
        </button>
        <button onClick={() => handleAnswer('DC Comics')}>
          <img src={dcButton} alt="DC Universe" />
        </button>
      </div>
      <div className="answer-container">{feedback && <p>{feedback}</p>}</div>
    </div>
  );
}

export default Quiz;
