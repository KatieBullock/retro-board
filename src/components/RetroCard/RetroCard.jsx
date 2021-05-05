import DeleteButton from "../Buttons/DeleteButton";
import LikeButton from "../Buttons/LikeButton";
import LeftButton from "../Buttons/LeftButton";
import RightButton from "../Buttons/RightButton";

const RetroCard = (props) => {
  const { card, index, cards, setCards, focus, setFocus } = props;

  const updateItem = (userInput) => {
    card.item = userInput;
    setCards([...cards]);
  };

  const updateLikes = () => {
    card.likes += 1;
    setCards([...cards]);
  };

  const deleteItem = (index) => {
    setCards(cards.filter((card, currentIndex) => currentIndex !== index));
  };

  const moveItem = (newCategory, index) => {
    card.category = newCategory;
    cards.push(cards.splice(index, 1)[0]);
    setCards([...cards]);
    setFocus(false);
  };

  const findLeftCategory = () => {
    let leftCategory;

    if (card.category === "Went Well") {
      leftCategory = "Action Items";
    } else if (card.category === "To Improve") {
      leftCategory = "Went Well";
    } else if (card.category === "Action Items") {
      leftCategory = "To Improve";
    }

    return leftCategory;
  };

  const findRightCategory = () => {
    let rightCategory;

    if (card.category === "Went Well") {
      rightCategory = "To Improve";
    } else if (card.category === "To Improve") {
      rightCategory = "Action Items";
    } else if (card.category === "Action Items") {
      rightCategory = "Went Well";
    }

    return rightCategory;
  };

  return (
    <div className="RetroCard" aria-label="Retro card">
      <textarea
        className="textbox"
        placeholder="Enter text here"
        aria-label="Enter text here"
        rows="1"
        autoFocus={focus}
        value={card.item}
        onChange={(e) => updateItem(e.target.value)}
        onBlur={(e) => {
          if (e.target.value === "") {
            deleteItem(index);
          }
        }}
      />

      <div className="button-group">
        <LeftButton
          moveItem={moveItem}
          leftCategory={findLeftCategory()}
          index={index}
        />
        <DeleteButton deleteItem={deleteItem} index={index} />
        <LikeButton updateLikes={updateLikes} card={card} />
        <RightButton
          moveItem={moveItem}
          rightCategory={findRightCategory()}
          index={index}
        />
      </div>
    </div>
  );
};

export default RetroCard;
