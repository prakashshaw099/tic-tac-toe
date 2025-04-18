import React from "react";
import { BiCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const GameBoard = ({ gameData, updatePlayerData }) => {
  const gameBox = new Array(9).fill(0);
  return (
    <div className="w-[310px] h-[315px] grid grid-cols-3 gap-1 duration-700">
      {gameBox?.map((_, index) => {
        const player = gameData[index];
        return (
          <div
            className="bg-[#233945] size-[100px] rounded-2xl flex justify-center items-center text-white text-5xl cursor-pointer"
            onClick={() => updatePlayerData(index)}
          >
            <>
              {player === "x" && (
                <RxCross2 size={55} className="text-[#e3be1d]" />
              )}
              {player === "o" && <BiCircle className="text-[#6decca]" />}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
