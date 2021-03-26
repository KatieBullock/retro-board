import "./App.css";
import { useState } from "react";
import WentWell from "./components/WentWell";
import ToImprove from "./components/ToImprove";
import ActionItems from "./components/ActionItems";
import RetroCard from "./components/RetroCard";

function App() {
  const [wentWell, setWentWell] = useState([]);
  const [toImprove, setToImprove] = useState([]);
  const [actionItems, setActionItems] = useState([]);

  const addItem = () => {
    return {
      wentWell: () => {
        setWentWell([...wentWell, ""]);
      },
      toImprove: () => {
        setToImprove([...toImprove, ""]);
      },
      actionItems: () => {
        setActionItems([...actionItems, ""]);
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
      },
      toImprove: (index) => {
        deleteItem().toImprove(index);
        setActionItems([...actionItems, toImprove[index]]);
      },
      actionItems: (index) => {
        deleteItem().actionItems(index);
        setWentWell([...wentWell, actionItems[index]]);
      },
    };
  };

  const moveItemLeft = () => {
    return {
      wentWell: (index) => {
        deleteItem().wentWell(index);
        setActionItems([...actionItems, wentWell[index]]);
      },
      toImprove: (index) => {
        deleteItem().toImprove(index);
        setWentWell([...wentWell, toImprove[index]]);
      },
      actionItems: (index) => {
        deleteItem().actionItems(index);
        setToImprove([...toImprove, actionItems[index]]);
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
          <WentWell addItem={addItem().wentWell}>
            {wentWell.map((item, index) => {
              return (
                <div key={`went-well-item-${index}`}>
                  <RetroCard
                    item={item}
                    index={index}
                    deleteItem={deleteItem().wentWell}
                    updateItem={updateItem().wentWell}
                    moveItemRight={moveItemRight().wentWell}
                    moveItemLeft={moveItemLeft().wentWell}
                  />
                </div>
              );
            })}
          </WentWell>
          <ToImprove addItem={addItem().toImprove}>
            {toImprove.map((item, index) => {
              return (
                <div key={`to-improve-item-${index}`}>
                  <RetroCard
                    item={item}
                    index={index}
                    deleteItem={deleteItem().toImprove}
                    updateItem={updateItem().toImprove}
                    moveItemRight={moveItemRight().toImprove}
                    moveItemLeft={moveItemLeft().toImprove}
                  />
                </div>
              );
            })}
          </ToImprove>
          <ActionItems addItem={addItem().actionItems}>
            {actionItems.map((item, index) => {
              return (
                <div key={`action-item-${index}`}>
                  <RetroCard
                    item={item}
                    index={index}
                    deleteItem={deleteItem().actionItems}
                    updateItem={updateItem().actionItems}
                    moveItemRight={moveItemRight().actionItems}
                    moveItemLeft={moveItemLeft().actionItems}
                  />
                </div>
              );
            })}
          </ActionItems>
        </div>
      </main>
    </div>
  );
}

export default App;
