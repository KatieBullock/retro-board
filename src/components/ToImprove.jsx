import AddButton from "./AddButton";
import RetroCard from "./RetroCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const ToImprove = (props) => {
  const {
    toImprove,
    addItem,
    focus,
    deleteItem,
    updateItem,
    moveItemRight,
    moveItemLeft,
  } = props;

  return (
    <div className="RetroCategory RetroCategory-2">
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        To Improve
      </h2>
      <AddButton addItem={addItem} />
      {toImprove.map((item, index) => {
        return (
          <div key={`to-improve-item-${index}`}>
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

export default ToImprove;
