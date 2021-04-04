import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Board from "./components/Board";
import RetroCard from "./components/RetroCard";

function App() {
  const [wentWell, setWentWell] = useState([
    { item: "Add something that was succesful!", likes: 0 },
  ]);
  const [toImprove, setToImprove] = useState([
    { item: "Add something that needs attention.", likes: 0 },
  ]);
  const [actionItems, setActionItems] = useState([
    { item: "Add something that you're working on.", likes: 0 },
  ]);
  const [focus, setFocus] = useState(false);
  const [isRow, setIsRow] = useState(true);

  const addItem = () => {
    return {
      wentWell: () => {
        setWentWell([...wentWell, { item: "", likes: 0 }]);
        setFocus(true);
      },
      toImprove: () => {
        setToImprove([...toImprove, { item: "", likes: 0 }]);
        setFocus(true);
      },
      actionItems: () => {
        setActionItems([...actionItems, { item: "", likes: 0 }]);
        setFocus(true);
      },
    };
  };

  const updateItem = () => {
    return {
      wentWell: (userInput, index) => {
        const newWentWell = [...wentWell];
        newWentWell[index].item = userInput;
        setWentWell(newWentWell);
      },
      toImprove: (userInput, index) => {
        const newToImprove = [...toImprove];
        newToImprove[index].item = userInput;
        setToImprove(newToImprove);
      },
      actionItems: (userInput, index) => {
        const newActionItem = [...actionItems];
        newActionItem[index].item = userInput;
        setActionItems(newActionItem);
      },
    };
  };

  const updateLikes = () => {
    return {
      wentWell: (index) => {
        const newWentWell = [...wentWell];
        newWentWell[index].likes += 1;
        setWentWell(newWentWell);
      },
      toImprove: (index) => {
        const newToImprove = [...toImprove];
        newToImprove[index].likes += 1;
        setToImprove(newToImprove);
      },
      actionItems: (index) => {
        const newActionItem = [...actionItems];
        newActionItem[index].likes += 1;
        setActionItems(newActionItem);
      },
    };
  };

  const deleteItem = () => {
    return {
      wentWell: (index) => {
        setWentWell(
          wentWell.filter((item, currentIndex) => currentIndex !== index)
        );
      },
      toImprove: (index) => {
        setToImprove(
          toImprove.filter((item, currentIndex) => currentIndex !== index)
        );
      },
      actionItems: (index) => {
        setActionItems(
          actionItems.filter((item, currentIndex) => currentIndex !== index)
        );
      },
    };
  };

  const moveItemRight = () => {
    return {
      wentWell: (index) => {
        deleteItem().wentWell(index);
        setToImprove([...toImprove, wentWell[index]]);
        setFocus(false);
      },
      toImprove: (index) => {
        deleteItem().toImprove(index);
        setActionItems([...actionItems, toImprove[index]]);
        setFocus(false);
      },
      actionItems: (index) => {
        deleteItem().actionItems(index);
        setWentWell([...wentWell, actionItems[index]]);
        setFocus(false);
      },
    };
  };

  const moveItemLeft = () => {
    return {
      wentWell: (index) => {
        deleteItem().wentWell(index);
        setActionItems([...actionItems, wentWell[index]]);
        setFocus(false);
      },
      toImprove: (index) => {
        deleteItem().toImprove(index);
        setWentWell([...wentWell, toImprove[index]]);
        setFocus(false);
      },
      actionItems: (index) => {
        deleteItem().actionItems(index);
        setToImprove([...toImprove, actionItems[index]]);
        setFocus(false);
      },
    };
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
            addItem={addItem().wentWell}
          >
            {wentWell.map((item, index) => {
              return (
                <RetroCard
                  key={`went-well-item-${index}`}
                  item={item}
                  index={index}
                  focus={focus}
                  wentWell={wentWell}
                  updateItem={updateItem().wentWell}
                  updateLikes={updateLikes().wentWell}
                  deleteItem={deleteItem().wentWell}
                  moveItemRight={moveItemRight().wentWell}
                  moveItemLeft={moveItemLeft().wentWell}
                />
              );
            })}
          </Board>
          <Board
            className="RetroCategory RetroCategory-2"
            category="To Improve"
            addItem={addItem().toImprove}
          >
            {toImprove.map((item, index) => {
              return (
                <RetroCard
                  key={`to-improve-item-${index}`}
                  item={item}
                  index={index}
                  focus={focus}
                  toImprove={toImprove}
                  updateItem={updateItem().toImprove}
                  updateLikes={updateLikes().toImprove}
                  deleteItem={deleteItem().toImprove}
                  moveItemRight={moveItemRight().toImprove}
                  moveItemLeft={moveItemLeft().toImprove}
                />
              );
            })}
          </Board>
          <Board
            className="RetroCategory RetroCategory-3"
            category="Action Items"
            addItem={addItem().actionItems}
          >
            {actionItems.map((item, index) => {
              return (
                <RetroCard
                  key={`action-item-${index}`}
                  item={item}
                  index={index}
                  focus={focus}
                  actionItems={actionItems}
                  updateItem={updateItem().actionItems}
                  updateLikes={updateLikes().actionItems}
                  deleteItem={deleteItem().actionItems}
                  moveItemRight={moveItemRight().actionItems}
                  moveItemLeft={moveItemLeft().actionItems}
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
