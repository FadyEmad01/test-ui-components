import React from "react";
import Squircle from "./components/Squircle";
import { Music4 } from "lucide-react";

const Squircles = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Squircle>
        <div className="aspect-square w-[200px] flex justify-center items-center bg-linear-to-t from-[#FA233B] to-[#FB5C74]">
          <Music4 className="w-[100px] h-[100px] text-white" />
        </div>
      </Squircle>
    </div>
  );
};

export default Squircles;
