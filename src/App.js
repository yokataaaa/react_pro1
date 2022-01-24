import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import logo from "./assets/logo.png";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  //   const [num, setNum] = useState(1);
  //   const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  // const [numOther, setNumOther] = useState(1);
  // const [sumOther, setSumOther] = useState(0);
  const [gameHistoryOther, setGameHistoryOther] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextNumOther = random(6);
    // setNum(nextNum);
    // setSum(sum + nextNum);
    // setNumOther(nextNumOther);
    // setSumOther(sumOther + nextNumOther);
    setGameHistory([...gameHistory, nextNum]);
    setGameHistoryOther([...gameHistoryOther, nextNumOther]);
  };

  const handleClearClick = () => {
    // setNum(1);
    // setSum(0);
    setGameHistory([]);
    // setNumOther(1);
    // setSumOther(0);
    setGameHistoryOther([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button" onClick={handleRollClick} color="blue">
            던지기
          </Button>
          <Button className="App-button" onClick={handleClearClick} color="red">
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <Board
          className=""
          name="나"
          color="blue"
          /*num={num} sum={sum}*/ gameHistory={gameHistory}
        />
        <Board
          name="상대"
          color="red"
          /*num={numOther} sum={sumOther}*/ gameHistory={gameHistoryOther}
        />
      </div>
    </div>
  );
}

export default App;
