import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const TeamCard = () => {
  return (
    <Card
      radius="lg"
      className="flex flex-col gap-2 border-2 border-[#5C666C] md:w-[280px] lg:w-[286px] bg-[#334047] p-2"
    >
      <Image
        alt="Woman listing to music"
        className="w-full rounded object-cover"
        src="/Team1.jpeg"
        width={200}
        height={200}
      />

      <CardBody className="flex flex-col gap-2">
        <h2 className="text-secondary font-bold">CEO and Founder</h2>
        <h1 className="text-2xl font-bold border-b w-auto">Nimbi Token</h1>
        <p className="text-[#EBECED] text-sm">
          Building the Nimbi community day in, day out. Shaping NIMBI’s vision
          into reality a step at a time. Visionary behind the project
        </p>
      </CardBody>
    </Card>
  );
};
