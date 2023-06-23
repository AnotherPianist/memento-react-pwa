import {useEffect} from "react";

export default function Header({handleNewGame, wins}) {
  useEffect(() => {document.title = `Memory Game | ${wins} wins`}, [wins]);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
}