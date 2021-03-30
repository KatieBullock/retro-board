import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import RetroCard from "./components/RetroCard";

function App() {
  const [wentWell, setWentWell] = useState([]);
  const [toImprove, setToImprove] = useState([]);
  const [actionItems, setActionItems] = useState([]);
  const [focus, setFocus] = useState(false);
  const [isRow, setIsRow] = useState(true);

  const addItem = () => {
    return {
      wentWell: () => {
        setWentWell([...wentWell, ""]);
        setFocus(true);
      },
      toImprove: () => {
        setToImprove([...toImprove, ""]);
        setFocus(true);
      },
      actionItems: () => {
        setActionItems([...actionItems, ""]);
        setFocus(true);
      },
    };
  };

  const updateItem = () => {
    return {
      wentWell: (userInput, index) => {
        const newWentWell = [...wentWell];
        newWentWell[index] = userInput;
        setWentWell(newWentWell);
      },
      toImprove: (userInput, index) => {
        const newToImprove = [...toImprove];
        newToImprove[index] = userInput;
        setToImprove(newToImprove);
      },
      actionItems: (userInput, index) => {
        const newActionItem = [...actionItems];
        newActionItem[index] = userInput;
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
            {isRow ? "Column" : "Row"}
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
                <div
                  key={`went-well-item-${index}`}
                  // onDrop={drop}
                  // onDragOver={dragOver}
                >
                  <RetroCard
                    // id={`card-${index}`}
                    // draggable="true"
                    item={item}
                    index={index}
                    wentWell={wentWell}
                    focus={focus}
                    deleteItem={deleteItem().wentWell}
                    updateItem={updateItem().wentWell}
                    moveItemRight={moveItemRight().wentWell}
                    moveItemLeft={moveItemLeft().wentWell}
                  />
                </div>
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
                <div
                  key={`to-improve-item-${index}`}
                  // onDrop={drop}
                  // onDragOver={dragOver}
                >
                  <RetroCard
                    // id={`card-${index}`}
                    // draggable="true"
                    item={item}
                    index={index}
                    toImprove={toImprove}
                    focus={focus}
                    deleteItem={deleteItem().toImprove}
                    updateItem={updateItem().toImprove}
                    moveItemRight={moveItemRight().toImprove}
                    moveItemLeft={moveItemLeft().toImprove}
                  />
                </div>
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
                <div
                  key={`action-item-${index}`}
                  // onDrop={drop}
                  // onDragOver={dragOver}
                >
                  <RetroCard
                    // id={`card-${index}`}
                    // draggable="true"
                    item={item}
                    index={index}
                    actionItems={actionItems}
                    focus={focus}
                    deleteItem={deleteItem().actionItems}
                    updateItem={updateItem().actionItems}
                    moveItemRight={moveItemRight().actionItems}
                    moveItemLeft={moveItemLeft().actionItems}
                  />
                </div>
              );
            })}
          </Board>
        </div>
      </main>
    </div>
  );
}

export default App;
