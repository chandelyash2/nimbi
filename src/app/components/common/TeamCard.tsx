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
      <span className="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 54 55"
          fill="none"
        >
          <g clip-path="url(#clip0_3134_1867)">
            <path
              d="M27 54.5C41.9117 54.5 54 42.4117 54 27.5C54 12.5883 41.9117 0.5 27 0.5C12.0883 0.5 0 12.5883 0 27.5C0 42.4117 12.0883 54.5 27 54.5Z"
              fill="#34AADF"
            />
            <path
              d="M11.2361 27.266C11.2361 27.266 24.7361 21.7256 29.4181 19.7747C31.213 18.9944 37.2997 16.4972 37.2997 16.4972C37.2997 16.4972 40.1089 15.4048 39.8748 18.0579C39.7967 19.1504 39.1725 22.9741 38.5482 27.1099C37.6118 32.9626 36.5973 39.3613 36.5973 39.3613C36.5973 39.3613 36.4413 41.1562 35.1147 41.4683C33.7881 41.7804 31.6031 40.3759 31.213 40.0637C30.9008 39.8296 25.3604 36.318 23.3315 34.6012C22.7852 34.1331 22.161 33.1967 23.4094 32.1042C26.2187 29.529 29.5742 26.3296 31.6031 24.3007C32.5395 23.3643 33.4759 21.1793 29.5742 23.8325C24.0338 27.6562 18.5714 31.2458 18.5714 31.2458C18.5714 31.2458 17.3228 32.0261 14.9818 31.3238C12.6407 30.6216 9.90944 29.6851 9.90944 29.6851C9.90944 29.6851 8.03672 28.5146 11.2361 27.266Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3134_1867">
              <rect
                width="54"
                height="54"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
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
