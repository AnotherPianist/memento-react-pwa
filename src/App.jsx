import {useEffect, useState} from "react";
import shuffle from "./utilities/shuffle";
import Card from "./components/Card";
import Header from "./components/Header";
import useAppBadge from "./hooks/useAppBadge";

function App() {
  const [cards, setCards] = useState(shuffle);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);
  const [setBadge, clearBadge] = useAppBadge();

  useEffect(() => {
    let pickTimer;

    if (firstPick && secondPick) {
      if (firstPick.image === secondPick.image) {
        setCards(prevCards => prevCards.map(card => card.image === firstPick.image ? {...card, matched: true} : card));
        handleTurn();
      } else {
        setDisabled(true);
        pickTimer = setTimeout(handleTurn, 1000);
      }
    }

    return () => clearTimeout(pickTimer);
  }, [cards, firstPick, secondPick]);

  useEffect(() => {
    if (cards.filter(card => !card.matched).length === 0) {
      setWins(prevWins => prevWins + 1);
      handleTurn();
      setBadge();
      setCards(shuffle);
    }
  }, [cards, wins]);

  function handleNewGame() {
    clearBadge();
    setWins(0);
    handleTurn();
    setCards(shuffle);
  }

  function handleClick(card) {
    if (!disabled)
      firstPick ? setSecondPick(card) : setFirstPick(card);
  }

  function handleTurn() {
    setFirstPick(null);
    setSecondPick(null);
    setDisabled(false);
  }

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins}/>
      <div className="grid">
        {cards.map(card => (
          <Card
            key={card.id}
            image={card.image}
            selected={card === firstPick || card === secondPick || card.matched}
            onClick={() => handleClick(card)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
