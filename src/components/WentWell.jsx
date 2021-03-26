import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const WentWell = (props) => {
  return (
    <div className="RetroCategory RetroCategory-1">
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        Went Well
      </h2>
      <button
        type="button"
        className="ButtonAdd button button-default"
        aria-label="Add new card"
        title="Add new card"
        onClick={() => props.addItem()}
      >
        +
      </button>
      {props.children}
    </div>
  );
};

export default WentWell;
