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

  const newItem = (e) => {
    if (e.target.name === "wentWell") {
      setWentWell([...wentWell, ""]);
    } else if (e.target.name === "toImprove") {
      setToImprove([...toImprove, ""]);
    } else if (e.target.name === "actionItems") {
      setActionItems([...actionItems, ""]);
    }
  };

  const updateItem = (userInput, index) => {
    const newWentWell = [...wentWell];
    newWentWell[index] = userInput;
    setWentWell(newWentWell);
  };

  const deleteItem = (index) => {
    setWentWell(
      wentWell.filter((item, currentIndex) => currentIndex !== index)
    );
  };

  return (
    <div className="App">
      <main class="content row">
        <h1>Retro Board</h1>
        <div>
          Layout &nbsp;<button class="button button-default">Column</button>
        </div>

        <div class="RetroApp row">
          <WentWell newItem={newItem}>
            {wentWell.map((item, index) => {
              return (
                <div key={`went-well-item-${index}`}>
                  <RetroCard
                    item={item}
                    index={index}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                  />
                </div>
              );
            })}
          </WentWell>
          <ToImprove newItem={newItem}>
            {toImprove.map((item, index) => {
              return (
                <div key={`to-improve-item-${index}`}>
                  <RetroCard
                    item={item}
                    index={index}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                  />
                </div>
              );
            })}
          </ToImprove>
          <ActionItems newItem={newItem}>
            {actionItems.map((item, index) => {
              return (
                <div key={`action-item-${index}`}>
                  <RetroCard
                    item={item}
                    index={index}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
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
