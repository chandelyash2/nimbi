/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "../common/Container";

import { TeamCard } from "../common/TeamCard";
import { useScroll } from "@/context";

export const Team = () => {
  const sectionRefs: any = useScroll();
  

  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-5 text-center" ref={sectionRefs.team}>
        <h2 className="text-4xl font-medium">Team</h2>
        <p className="lg:w-[65%]">
          Decentralized Collaboration is at the heart of our mission. We are
          proud to partner with industry leaders, innovators, and like-minded
          projects to drive forward our vision of a decentralized future.
          Together, we're building bridges, fostering innovation, and creating
          opportunities for growth and advancement in the blockchain space.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid grid-cols-4 gap-4 items-center justify-center">
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
