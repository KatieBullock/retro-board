import "./App.css";
import { useState } from "react";
import WentWell from "./components/WentWell";
import ToImprove from "./components/ToImprove";
import ActionItems from "./components/ActionItems";

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
          <WentWell
            wentWell={wentWell}
            focus={focus}
            addItem={addItem().wentWell}
            deleteItem={deleteItem().wentWell}
            updateItem={updateItem().wentWell}
            moveItemRight={moveItemRight().wentWell}
            moveItemLeft={moveItemLeft().wentWell}
          />
          <ToImprove
            toImprove={toImprove}
            focus={focus}
            addItem={addItem().toImprove}
            deleteItem={deleteItem().toImprove}
            updateItem={updateItem().toImprove}
            moveItemRight={moveItemRight().toImprove}
            moveItemLeft={moveItemLeft().toImprove}
          />
          <ActionItems
            actionItems={actionItems}
            focus={focus}
            addItem={addItem().actionItems}
            deleteItem={deleteItem().actionItems}
            updateItem={updateItem().actionItems}
            moveItemRight={moveItemRight().actionItems}
            moveItemLeft={moveItemLeft().actionItems}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
