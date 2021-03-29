import AddButton from "./AddButton";
import RetroCard from "./RetroCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const ActionItems = (props) => {
  const {
    actionItems,
    focus,
    addItem,
    deleteItem,
    updateItem,
    moveItemRight,
    moveItemLeft,
  } = props;

  return (
    <div className="RetroCategory RetroCategory-3">
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        Action Items
      </h2>
      <AddButton addItem={addItem} />
      {actionItems.map((item, index) => {
        return (
          <div key={`action-item-${index}`}>
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

export default ActionItems;
