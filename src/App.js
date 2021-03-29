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

  return (
    <div className="App">
      <main className="content row">
        <h1>Retro Board</h1>
        <div>
          Layout &nbsp;<button className="button button-default">Column</button>
        </div>

        <div className="RetroApp row">
          <WentWell
            wentWell={wentWell}
            addItem={addItem().wentWell}
            focus={focus}
            deleteItem={deleteItem().wentWell}
            updateItem={updateItem().wentWell}
            moveItemRight={moveItemRight().wentWell}
            moveItemLeft={moveItemLeft().wentWell}
          />
          <ToImprove
            toImprove={toImprove}
            addItem={addItem().toImprove}
            focus={focus}
            deleteItem={deleteItem().toImprove}
            updateItem={updateItem().toImprove}
            moveItemRight={moveItemRight().toImprove}
            moveItemLeft={moveItemLeft().toImprove}
          />
          <ActionItems
            actionItems={actionItems}
            addItem={addItem().actionItems}
            focus={focus}
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
