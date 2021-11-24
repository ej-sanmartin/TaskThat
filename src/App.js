import '../src/styles/App.scss';

function App() {
  return (
    <div className="app-page">
      <div className="main-container">
        <h2>Task List</h2>
        <div>
          <p>1 out 4 items done</p>
          <button>Clear Done</button>
          <button>Clear All</button>
        </div>
        <input
          type="text"
          placeholder="I need to do..."
        />
        <div>
          <button>Newest Tasks</button>
          <button>Remaining</button>
        </div>
        <div>
          <h3>Workout</h3>
          <button>!</button>
          <button>X</button>
        </div>
      </div>
    </div>
  );
}

export default App;
