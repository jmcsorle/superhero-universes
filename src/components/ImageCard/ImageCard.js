import './ImageCard.css';

function ImageCard({ character }) {
    return (
        <div>
            <img src={character.imageMD} alt={character.name} />
        </div>
    )
}

export default ImageCard;