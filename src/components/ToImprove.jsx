import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const ToImprove = (props) => {
  return (
    <div className="RetroCategory RetroCategory-2">
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        To Improve
      </h2>
      <button
        type="button"
        className="ButtonAdd button button-default"
        aria-label="Add to new card"
        title="Add to new card"
        onClick={() => props.addItem()}
      >
        +
      </button>
      {props.children}
    </div>
  );
};

export default ToImprove;
