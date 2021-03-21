import "./App.css";
import WentWell from "./components/WentWell";
import ToImprove from "./components/ToImprove";
import ActionItems from "./components/ActionItems";
import RetroCard from "./components/RetroCard";

function App() {
  return (
    <div className="App">
      <main class="content row">
        <h1>Retro Board</h1>
        <div>
          Layout &nbsp;<button class="button button-default">Column</button>
        </div>

        <div class="RetroApp row">
          <WentWell>
            <RetroCard />
          </WentWell>
          <ToImprove>
            <RetroCard />
          </ToImprove>
          <ActionItems>
            <RetroCard />
          </ActionItems>
        </div>
      </main>
    </div>
  );
}

export default App;
