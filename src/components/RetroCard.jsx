import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTimesCircle,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const RetroCard = (props) => {
  // const dragStart = (e) => {
  //   const target = e.target;
  //   console.log(target.id);

  //   e.dataTransfer.setData("card_id", target.id);

  //   setTimeout(() => {
  //     target.style.display = "none";
  //   }, 0);
  // };

  // const dragOver = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <div
      className="RetroCard"
      aria-label="Retro card"
      // id={props.id}
      // draggable="true"
      // onDragStart={dragStart}
      // onDragOver={dragOver}
    >
      <textarea
        className="textbox"
        placeholder="Enter text here"
        aria-label="Enter text here"
        rows="1"
        autoFocus={props.focus}
        value={props.item}
        onChange={(e) => props.updateItem(e.target.value, props.index)}
        onBlur={(e) => {
          if (e.target.value === "") {
            props.deleteItem(props.index);
          }
        }}
      />

      <div className="button-group">
        <button
          type="button"
          className="button button-left"
          title="Move left"
          onClick={() => props.moveItemLeft(props.index)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          type="button"
          className="button button-delete"
          title="Delete"
          onClick={() => props.deleteItem(props.index)}
        >
          <FontAwesomeIcon icon={faTimesCircle} /> Delete
        </button>
        <div>
          <button type="button" className="button" title="Like">
            <FontAwesomeIcon icon={faThumbsUp} /> 5
          </button>
          <button type="button" className="button" title="Dislike">
            <FontAwesomeIcon icon={faThumbsDown} /> 0
          </button>
        </div>
        <button
          type="button"
          className="button button-right"
          title="Move right"
          onClick={() => props.moveItemRight(props.index)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default RetroCard;
