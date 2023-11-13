import "./App.css";
import circle_icon from "../src/Assets/circle.png";
import cross_icon from "../src/Assets/cross.png";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe <span>Game</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
        <button className="reset">Reset</button>
      </div>
    </>
  );
}

export default App;
