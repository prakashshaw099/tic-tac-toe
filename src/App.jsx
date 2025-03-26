import { useState } from "react";
import { BiCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [player, setPlayer] = useState("");
  const [gameData, setGameData] = useState(new Array(9));
  const [winner, setWinner] = useState("");
  const [remainStep, setRemainStep] = useState(9);
  const [gameLogic, setGameLogic] = useState({
    x: { 102: 0, 345: 0, 678: 0, 306: 0, 147: 0, 258: 0, 408: 0, 246: 0 },
    o: { 102: 0, 345: 0, 678: 0, 306: 0, 147: 0, 258: 0, 408: 0, 246: 0 },
  });

  const gameBox = new Array(9).fill(0);

  const updatePlayerData = (index) => {
    if (winner) {
      return;
    }
    let tempGameData = [...gameData];
    let tempGameLogic = gameLogic;

    if (tempGameData[index] !== "x" && tempGameData[index] !== "o") {
      tempGameData[index] = player;
      setGameData(tempGameData);

      let data = Object.keys(gameLogic[player]);

      for (let i = 0; i < 8; i++) {
        let playerData = tempGameLogic[player][data[i]];
        if (data[i]?.includes(String(index))) {
          playerData = playerData + 1;

          tempGameLogic[player][data[i]] = playerData;
          if (playerData === 3) {
            setWinner(player);
            break;
          }
        }
      }
      setRemainStep(remainStep - 1);

      setGameLogic(tempGameLogic);
      setPlayer(player === "x" ? "o" : "x");

      if (remainStep - 1 === 0 && winner === "") {
        setWinner("d");
      }
    }
  };

  const currentPlayer = (player) => {
    return (
      <>
        {player === "x" && <RxCross2 size={55} className="text-[#e3be1d]" />}
        {player === "o" && <BiCircle className="text-[#6decca]" />}
      </>
    );
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-center mb-10 text-4xl font-semibold text-white">
        Tic Tac Toe
      </h1>

      {!player ? (
        <div className="w-[310px] h-[315px] rounded-2xl flex flex-col justify-center items-center duration-700">
          <div className="text-center mb-5 text-2xl font-semibold text-white">
            Select Player 1
          </div>
          <div className="flex justify-center items-center gap-4">
            <div
              className="bg-[#233945] size-[100px] rounded-2xl flex justify-center items-center text-white text-5xl cursor-pointer"
              onClick={() => setPlayer("x")}
            >
              <RxCross2 size={100} className="text-[#e3be1d]" />
            </div>
            <div
              className="bg-[#233945] size-[100px] rounded-2xl flex justify-center items-center text-white text-5xl cursor-pointer"
              onClick={() => setPlayer("o")}
            >
              <BiCircle size={88} className="text-[#6decca]" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {winner ? (
            <div className="w-[310px] h-[315px] bg-[#233945] rounded-2xl flex flex-col justify-center items-center duration-700">
              <div className="flex justify-center items-center">
                {(winner === "d" || winner === "x") && (
                  <RxCross2 size={100} className="text-[#e3be1d]" />
                )}
                {(winner === "d" || winner === "o") && (
                  <BiCircle size={88} className="text-[#6decca]" />
                )}
              </div>
              <div className="text-4xl text-white">
                {winner !== "d" ? "WINNER!" : "DRAW!"}
              </div>
              <button
                className="mt-8 text-white bg-[#192b36] px-6 py-4 rounded-2xl cursor-pointer"
                onClick={() => {
                  setGameData(new Array(9));
                  setPlayer("");
                  setWinner("");
                  setRemainStep(9);
                  setGameLogic({
                    x: {
                      102: 0,
                      345: 0,
                      678: 0,
                      306: 0,
                      147: 0,
                      258: 0,
                      408: 0,
                      246: 0,
                    },
                    o: {
                      102: 0,
                      345: 0,
                      678: 0,
                      306: 0,
                      147: 0,
                      258: 0,
                      408: 0,
                      246: 0,
                    },
                  });
                }}
              >
                Reset
              </button>
            </div>
          ) : (
            <div className="w-[310px] h-[315px] grid grid-cols-3 gap-1 duration-700">
              {gameBox?.map((_, index) => {
                return (
                  <div
                    className="bg-[#233945] size-[100px] rounded-2xl flex justify-center items-center text-white text-5xl cursor-pointer"
                    onClick={() => updatePlayerData(index)}
                  >
                    {currentPlayer(gameData[index])}
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
