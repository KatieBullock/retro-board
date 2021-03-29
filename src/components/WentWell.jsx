import AddButton from "./AddButton";
import RetroCard from "./RetroCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const WentWell = (props) => {
  const {
    wentWell,
    addItem,
    focus,
    deleteItem,
    updateItem,
    moveItemRight,
    moveItemLeft,
  } = props;

  return (
    <div className="RetroCategory RetroCategory-1">
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        Went Well
      </h2>
      <AddButton addItem={addItem} />
      {wentWell.map((item, index) => {
        return (
          <div key={`went-well-item-${index}`}>
            <RetroCard
              item={item}
              index={index}
              focus={focus}
              deleteItem={deleteItem}
              updateItem={updateItem}
              moveItemRight={moveItemRight}
              moveItemLeft={moveItemLeft}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WentWell;
