import React from "react";
import { BiCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const SelectPlayer = ({ setPlayer }) => {
  return (
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
  );
};

export default SelectPlayer;
