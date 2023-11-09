import './ImageCard.css';

function ImageCard({ character }) {
    return (
        <div>
            <img src={character.images.md} alt={character.name} />
            <h2></h2>
        </div>
    )
}

export default ImageCard;