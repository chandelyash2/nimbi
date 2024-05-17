/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "../common/Container";

import { TeamCard } from "../common/TeamCard";
import { useScroll } from "@/context";

const teamArr = [
  {
    img: "/Team1.jpeg",
    role: "CEO and Founder",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
  {
    img: "/Team2.png",
    role: "TECHNICAL OFFICER",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
  {
    img: "/Team3.png",
    role: "SMART CONTRACT DEV",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
  {
    img: "/Team4.png",
    role: "MARKETING",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
  {
    img: "/Team5.png",
    role: "BACKEND DEV",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
  {
    img: "/Team6.png",
    role: "UI/UX",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
  {
    img: "/Team7.png",
    role: "FRONT END DEV",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
  {
    img: "/Team8.png",
    role: "COMMUNITY MODERATION",
    name: "Nimbi Token",
    description:
      "Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project ",
  },
];
export const Team = () => {
  const sectionRefs: any = useScroll();

  return (
    <Container>
      <div className="flex flex-col gap-5 items-center" ref={sectionRefs.team}>
        <h2 className="text-4xl font-medium text-center w-full">Team</h2>
        <div className="flex justify-center">
          <p className="lg:w-[45%] capitalize text-center">
            Decentralized Collaboration is at the heart of our mission. We are
            proud to partner with industry leaders, innovators, and like-minded
            projects to drive forward our vision of a decentralized future.
            Together, we're building bridges, fostering innovation, and creating
            opportunities for growth and advancement in the blockchain space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[74%] gap-4">
          {teamArr.map((item, i) => (
            <TeamCard data={item} key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
};
