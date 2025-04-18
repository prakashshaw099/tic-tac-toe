import { useState } from "react";
import SelectPlayer from "./components/selectPlayer";
import Winner from "./components/Winner";
import GameBoard from "./components/GameBoard";

function App() {
  const [player, setPlayer] = useState("");
  const [gameData, setGameData] = useState(new Array(9));
  const [winner, setWinner] = useState("");
  const [remainStep, setRemainStep] = useState(9);

  const playerChange = { x: "o", o: "x" };

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const resetGame = () => {
    setGameData(new Array(9));
    setPlayer("");
    setWinner("");
    setRemainStep(9);
  };

  const updatePlayerData = (index) => {
    let updatedGameData = [...gameData];

    if (updatedGameData[index] !== "x" && updatedGameData[index] !== "o") {
      updatedGameData[index] = player;
      setGameData(updatedGameData);

      for (let i = 0; i < 8; i++) {
        const [a, b, c] = winningCombination[i];
        if (
          updatedGameData[a] === player &&
          updatedGameData[b] === player &&
          updatedGameData[c] === player
        ) {
          setWinner(player);
          return;
        }
      }
      setRemainStep(remainStep - 1);
      setPlayer(playerChange[player]);

      if (remainStep - 1 === 0 && winner === "") {
        setWinner("d");
      }
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-center mb-10 text-4xl font-semibold text-white">
        Tic Tac Toe
      </h1>

      {!player ? (
        <SelectPlayer setPlayer={setPlayer} />
      ) : (
        <>
          {winner ? (
            <Winner winner={winner} resetGame={resetGame} />
          ) : (
            <GameBoard
              gameData={gameData}
              updatePlayerData={updatePlayerData}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
