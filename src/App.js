import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Board from "./components/Board";
import RetroCard from "./components/RetroCard";

function App() {
  const [cards, setCards] = useState([
    {
      item: "Add something that was successful!",
      likes: 0,
      category: "Went Well",
    },
    {
      item: "Add something that needs attention.",
      likes: 0,
      category: "To Improve",
    },
    {
      item: "Add something that you're working on.",
      likes: 0,
      category: "Action Items",
    },
  ]);
  const [focus, setFocus] = useState(false);
  const [isRow, setIsRow] = useState(true);

  const addItem = (category) => {
    setCards([...cards, { item: "", likes: 0, category: category }]);
    setFocus(true);
  };

  const updateItem = (userInput, index) => {
    const newCards = [...cards];
    newCards[index].item = userInput;
    setCards(newCards);
  };

  const updateLikes = (index) => {
    const newCards = [...cards];
    newCards[index].likes += 1;
    setCards(newCards);
  };

  const deleteItem = (index) => {
    setCards(cards.filter((card, currentIndex) => currentIndex !== index));
  };

  const moveItem = (newCategory, index) => {
    cards[index].category = newCategory;
    cards.push(cards.splice(index, 1)[0]);
    setCards([...cards]);
    setFocus(false);
  };

  const toggleLayout = () => {
    setIsRow(!isRow);
  };

  return (
    <div className="App">
      <main className="content row">
        <h1>Retro Board</h1>
        <div className="toggle-layout">
          Layout &nbsp;
          <button className="button button-default" onClick={toggleLayout}>
            {isRow ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faBars} rotation={90} />
            )}
          </button>
        </div>
        <div className={`RetroApp ${isRow ? "row" : "column"}`}>
          <Board
            className="RetroCategory RetroCategory-1"
            category="Went Well"
            addItem={addItem}
          >
            {cards.map((card, index) => {
              if (card.category === "Went Well")
                return (
                  <RetroCard
                    key={`went-well-item-${index}`}
                    card={card}
                    index={index}
                    focus={focus}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                    updateLikes={updateLikes}
                    moveItem={moveItem}
                    leftCategory="Action Items"
                    rightCategory="To Improve"
                  />
                );
            })}
          </Board>
          <Board
            className="RetroCategory RetroCategory-2"
            category="To Improve"
            addItem={addItem}
          >
            {cards.map((card, index) => {
              if (card.category === "To Improve")
                return (
                  <RetroCard
                    key={`to-improve-item-${index}`}
                    card={card}
                    index={index}
                    focus={focus}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                    updateLikes={updateLikes}
                    moveItem={moveItem}
                    leftCategory="Went Well"
                    rightCategory="Action Items"
                  />
                );
            })}
          </Board>
          <Board
            className="RetroCategory RetroCategory-3"
            category="Action Items"
            addItem={addItem}
          >
            {cards.map((card, index) => {
              if (card.category === "Action Items")
                return (
                  <RetroCard
                    key={`action-item-${index}`}
                    card={card}
                    index={index}
                    focus={focus}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                    updateLikes={updateLikes}
                    moveItem={moveItem}
                    leftCategory="To Improve"
                    rightCategory="Went Well"
                  />
                );
            })}
          </Board>
        </div>
      </main>
    </div>
  );
}

export default App;
