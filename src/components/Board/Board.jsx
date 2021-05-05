import AddButton from "../Buttons/AddButton";
import RetroCard from "../RetroCard/RetroCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Board = (props) => {
  const { className, category, cards, setCards, focus, setFocus } = props;

  const addItem = (category) => {
    setCards([
      ...cards,
      { item: "", likes: 0, category: category, id: cards.length },
    ]);
    setFocus(true);
  };

  return (
    <div className={className}>
      <h2>
        <FontAwesomeIcon icon={faSquare} className="category-color" />
        {category}
      </h2>
      <AddButton addItem={addItem} category={category} />
      {cards
        .filter((card) => card.category === category)
        .map((card) => {
          let index = cards.indexOf(card);

          return (
            <RetroCard
              key={`${category}-${index}`}
              card={card}
              index={index}
              cards={cards}
              setCards={setCards}
              focus={focus}
              setFocus={setFocus}
            />
          );
        })}
    </div>
  );
};

export default Board;
