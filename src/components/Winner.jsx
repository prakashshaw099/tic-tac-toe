import React from "react";
import { BiCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Winner = ({ winner, resetGame }) => {
  return (
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
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
};

export default Winner;
