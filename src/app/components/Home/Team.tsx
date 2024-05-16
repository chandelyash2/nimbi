/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "../common/Container";

import { TeamCard } from "../common/TeamCard";
import { useScroll } from "@/context";

export const Team = () => {
  const sectionRefs: any = useScroll();

  return (
    <Container>
      <div className="flex flex-col gap-5 items-center" ref={sectionRefs.team}>
        <h2 className="text-4xl font-medium text-center w-full">Team</h2>
        <div className="flex justify-center">
          <p className="lg:w-[70%] capitalize text-center">
            Decentralized Collaboration is at the heart of our mission. We are
            proud to partner with industry leaders, innovators, and like-minded
            projects to drive forward our vision of a decentralized future.
            Together, we're building bridges, fostering innovation, and creating
            opportunities for growth and advancement in the blockchain space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </Container>
  );
};
