/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "../../common/Container";

export const Mission = () => {
  return (
    <Container>
      <div className=" relativeflex flex-col lg:flex-row lg:w-[1205px]">
        <div className="absolute right-0 ">
          <img src="./New1.png" alt="eth" className="w-[360px] h-[1060px] relative z-1"/>
        </div>
        <img
          src="/Mission.png"
          width={200}
          height={200}
          alt="mission"
          className="w-full lg:w-[469px] lg:h-[392px] relative z-2"
        />
        <div className="capitalize flex flex-col gap-8 mt-4">
          <h2 className="text-2xl lg:text-4xl font-medium">Mission</h2>
          <p className="text-[#EBECED]">
            Nimbi's mission is to keep everything decentralized, transparent and
            immutable. corporations have become way too powerful and nimbi
            knows---now is the time to unity against their greed and power.
            let's all collect our crypto dust and stand up to their tyranny.
          </p>
          <p className="text-xl lg:text-2xl font-medium">
            We make participating in airdrops very easy.
          </p>
        </div>
      </div>
    </Container>
  );
};
