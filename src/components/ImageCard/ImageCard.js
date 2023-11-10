import './ImageCard.css';
import villainImage from '../../assets/Joker.png';

function ImageCard({ character }) {


    return (
        <div>
            <img src={character.images.md || character.images.lg || villainImage} alt={character.name} />
        </div>
    )
}

export default ImageCard;