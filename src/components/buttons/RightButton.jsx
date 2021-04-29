import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const RightButton = ({ moveItem, rightCategory, index }) => {
  return (
    <button
      type="button"
      className="button button-right"
      title="Move right"
      onClick={() => moveItem(rightCategory, index)}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
};

export default RightButton;
