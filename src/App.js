import "./App.css";
import { useState } from "react";
import WentWell from "./components/WentWell";
import ToImprove from "./components/ToImprove";
import ActionItems from "./components/ActionItems";
import RetroCard from "./components/RetroCard";

function App() {
  const [wentWell, setWentWell] = useState(["Set up project with React"]);
  const [toImprove, setToImprove] = useState(["Work on useState"]);
  const [actionItems, setActionItems] = useState(["Finish project"]);

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
    let movedItem;
    return {
      wentWell: (index) => {
        setWentWell(
          wentWell.filter((item, currentIndex) => {
            movedItem = item;
            return currentIndex !== index;
          })
        );
        setToImprove([...toImprove, movedItem]);
      },
      toImprove: (index) => {
        setToImprove(
          toImprove.filter((item, currentIndex) => {
            movedItem = item;
            return currentIndex !== index;
          })
        );
        setActionItems([...actionItems, movedItem]);
      },
      actionItems: (index) => {
        setActionItems(
          actionItems.filter((item, currentIndex) => {
            movedItem = item;
            return currentIndex !== index;
          })
        );
        setWentWell([...wentWell, movedItem]);
      },
    };
  };

  const moveItemLeft = () => {
    let movedItem;
    return {
      wentWell: (index) => {
        setWentWell(
          wentWell.filter((item, currentIndex) => {
            movedItem = item;
            return currentIndex !== index;
          })
        );
        setActionItems([...actionItems, movedItem]);
      },
      toImprove: (index) => {
        setToImprove(
          toImprove.filter((item, currentIndex) => {
            movedItem = item;
            return currentIndex !== index;
          })
        );
        setWentWell([...wentWell, movedItem]);
      },
      actionItems: (index) => {
        setActionItems(
          actionItems.filter((item, currentIndex) => {
            movedItem = item;
            return currentIndex !== index;
          })
        );
        setToImprove([...toImprove, movedItem]);
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
