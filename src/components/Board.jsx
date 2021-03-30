import AddButton from "./AddButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Board = (props) => {
  const { className, category, addItem } = props;

  return (
    <div className={className}>
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        {category}
      </h2>
      <AddButton addItem={addItem} />
      {props.children}
    </div>
  );
};

export default Board;
