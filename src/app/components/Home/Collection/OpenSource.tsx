/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Container } from "../../common/Container";

export const OpenSource = () => {
  return (
    <Container>
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="absolute left-0 top-10">
          <img src="./Nimbilogo.png" alt="eth" className="w-[400px] h-[937px] relative z-1"/>
        </div>
        <Image src="/Open.png" width={389} height={391} alt="open" className="relative z-2" />
        <div className="flex flex-col gap-2 lg:w-[56%]">
          <h2 className="text-4xl font-medium">
            Open-Source Decentralized Lottery
          </h2>
          <p className="text-2xl font-medium">
            Introducing Crypto Lotto, the web 3 Dapp 🎉 that puts all those
            centralized lotto's to shame!
          </p>
          <p className="text-[#EBECED]">
            👋 Say goodbye to rigged games and hello to fairness and
            transparency! 🔍🚫 No more wondering if the odds are stacked against
            you, because with Crypto Lotto, everything is open source! 📜💻
            We've taken the power from the greedy hands of the centralized lotto
            gods and put it back into the hands of the people! 💪💰 Want to win
            big while knowing you're not being hoodwinked? Look no further! 🌟
            Participate in our decentralized lottery and enjoy the thrill of a
            fair game. #NoMoreRiggedGames Play Crypto Lotto today and experience
            the excitement of a true equal opportunity lottery! 🎊💸💪 nimbi
            knows you should only play the open sourced, decentralized and
            transparent lotto. convert your crypto dust to nimbi token, become
            part of the wolfpack and use all of our crypto dust to stand strong
            together.
          </p>
        </div>
      </div>
    </Container>
  );
};