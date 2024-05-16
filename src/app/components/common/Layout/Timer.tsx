import { Button } from "@nextui-org/react";
import React from "react";

export const Timer = () => {
  return (
    <div className=" w-full bg-primary border-b border-secondary p-2 pb-4 flex flex-col justify-center items-center gap-2 md:gap-12 md:flex-row">
      <h2 className="font-medium">Private Sell Starts</h2>
      <div className="bg-[#2E3A41] rounded px-[10px] py-[5px] flex gap-10">
        <div className="flex flex-col items-center">
          <span className="text-4xl">07</span>
          <span className="text-xs">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">12</span>
          <span className="text-xs">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">32</span>
          <span className="text-xs">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">45</span>
          <span className="text-xs">Seconds</span>
        </div>
      </div>
      <Button className="hidden w-[143px] p-2 md:flex justify-center items-center rounded bg-[#2E3A41] text-sm text-white">
        Buy Now
      </Button>
    </div>
  );
};
