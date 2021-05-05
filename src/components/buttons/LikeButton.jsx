import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({ updateLikes, card }) => {
  return (
    <button
      type="button"
      className="button"
      title="Like"
      onClick={() => {
        updateLikes();
      }}
    >
      <FontAwesomeIcon icon={faHeart} /> {card.likes}
    </button>
  );
};

export default LikeButton;
