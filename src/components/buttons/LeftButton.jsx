import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const LeftButton = ({ moveItem, leftCategory, index }) => {
  return (
    <button
      type="button"
      className="button button-left"
      title="Move left"
      onClick={() => moveItem(leftCategory, index)}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
};

export default LeftButton;
