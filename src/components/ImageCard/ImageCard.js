import './ImageCard.css';

function ImageCard({ character }) {
    return (
        <div className="character-image">
            <img src={character.imageMD} alt={character.name} />
        </div>
    )
}

export default ImageCard;