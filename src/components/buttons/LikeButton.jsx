import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({ updateLikes, card, index }) => {
  return (
    <button
      type="button"
      className="button"
      title="Like"
      onClick={() => {
        updateLikes(index);
      }}
    >
      <FontAwesomeIcon icon={faHeart} /> {card.likes}
    </button>
  );
};

export default LikeButton;
