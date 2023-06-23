import {useState} from "react";
import shuffle from "./utilities/shuffle";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState(shuffle);
  return (
    <div className="grid">
      {cards.map(card => (<Card key={card.id} image={card.image} selected={false} onClick={() => {}}/>))}
    </div>
  );
}

export default App;
