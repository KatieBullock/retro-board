import AddButton from "./AddButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Board = (props) => {
  const { className, category, addItem } = props;

  // const drop = (e) => {
  //   e.preventDefault();
  //   const card_id = e.dataTransfer.getData("card_id");

  //   const card = document.getElementById(card_id);
  //   card.style.display = "block";

  //   e.target.appendChild(card);
  // };

  // const dragOver = (e) => {
  //   e.preventDefault();
  // };

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
