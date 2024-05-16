/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../../common/Container";

export const Working = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-5 capitalize text-center">
        <h2 className="font-medium text-4xl">How It Works</h2>
        <div className="hidden lg:flex justify-center lg:w-[70%]">
          <img src="/Group.png" alt="group" className="w-full" />
        </div>
        <div className="lg:hidden flex justify-center">
          <img src="/Group1.png" alt="group" className="w-full " />
        </div>
      </div>
    </Container>
  );
};
