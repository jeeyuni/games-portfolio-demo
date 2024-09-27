import GameCard from "./GameCard";

const gamesList = [
  {
    id: 0,
    name: "Catan",
    rating: null,
    category: "board game"
  },
  {
    id: 1,
    name: "The Greate Dalmuti",
    rating: null,
    category: "card game"
  },
  {
    id: 2,
    name: "Antidote",
    rating: null,
    category: "card game"
  },
  {
    id: 3,
    name: "Uno No Mercy",
    rating: null,
    category: "card game"
  },
]



function App() {
  return (
    <div>
      <h1>My Board Games</h1>
      {gamesList.map(g => <GameCard game={g} />)}
    </div>
  );
}

export default App;
