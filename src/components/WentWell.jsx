import RetroCard from "./RetroCard";
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
      {props.wentWell.map((item, index) => {
        return (
          <div key={`went-well-item-${index}`}>
            <RetroCard
              item={item}
              index={index}
              focus={props.focus}
              deleteItem={props.deleteItem}
              updateItem={props.updateItem}
              moveItemRight={props.moveItemRight}
              moveItemLeft={props.moveItemLeft}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WentWell;
