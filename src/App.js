import { useState } from "react";
import Board from "./components/Board/Board";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
            cards={cards}
            setCards={setCards}
            focus={focus}
            setFocus={setFocus}
          />
          <Board
            className="RetroCategory RetroCategory-2"
            category="To Improve"
            cards={cards}
            setCards={setCards}
            focus={focus}
            setFocus={setFocus}
          />
          <Board
            className="RetroCategory RetroCategory-3"
            category="Action Items"
            cards={cards}
            setCards={setCards}
            focus={focus}
            setFocus={setFocus}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
