import './rating.css';

function Rating(props) {
    const value = Math.floor(props.children);
    const emptyStars = 5 - value;
    return (
      <div>
        {Array(value).fill(<span>★</span>)}
        {Array(emptyStars).fill(<span>☆</span>)}
      </div>
    );
}


export default Rating;