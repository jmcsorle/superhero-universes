import './ErrorComponent.css';
import PropTypes from 'prop-types';

import dogs from '../../assets/CutePups.png';
import { Link } from 'react-router-dom';

function ErrorComponent({ error }) {
  return (
    <div className="error-handling">
      {error ? (
        <div className="error-message">
        <h2>{error}</h2>
        </div>
      ) : (
        <div className="error-message">
        <h2>Oops! Wrong page.</h2>
        <p className="instructions">Please select the link to Return to Home Page or Choose Another Character.</p>
        </div>
      )}
      <div className="error-home-link">
        <Link to="/">Return to Home Page</Link>
      </div>
      <div className="image-container">
        <img src={dogs} alt="" className="dog-image" />
      </div>
    </div>
  );
}

export default ErrorComponent;

ErrorComponent.propTypes = {
  error: PropTypes.string,
}