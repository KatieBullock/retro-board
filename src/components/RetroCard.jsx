import DeleteButton from "./buttons/DeleteButton";
import LikeButton from "./buttons/LikeButton";
import LeftButton from "./buttons/LeftButton";
import RightButton from "./buttons/RightButton";

const RetroCard = (props) => {
  return (
    <div className="RetroCard" aria-label="Retro card">
      <textarea
        className="textbox"
        placeholder="Enter text here"
        aria-label="Enter text here"
        rows="1"
        autoFocus={props.focus}
        value={props.card.item}
        onChange={(e) => props.updateItem(e.target.value, props.index)}
        onBlur={(e) => {
          if (e.target.value === "") {
            props.deleteItem(props.index);
          }
        }}
      />

      <div className="button-group">
        <LeftButton
          moveItem={props.moveItem}
          leftCategory={props.leftCategory}
          index={props.index}
        />
        <DeleteButton deleteItem={props.deleteItem} index={props.index} />
        <LikeButton
          updateLikes={props.updateLikes}
          card={props.card}
          index={props.index}
        />
        <RightButton
          moveItem={props.moveItem}
          rightCategory={props.rightCategory}
          index={props.index}
        />
      </div>
    </div>
  );
};

export default RetroCard;
