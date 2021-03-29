import RetroCard from "./RetroCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const ActionItems = (props) => {
  return (
    <div className="RetroCategory RetroCategory-3">
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        Action Items
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
      {props.actionItems.map((item, index) => {
        return (
          <div key={`action-item-${index}`}>
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

export default ActionItems;
