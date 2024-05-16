import React from "react";
import { Collection } from "../Collection";
import { CollectionCard } from "./CollectionCard";
import { Button } from "@nextui-org/react";
import { Container } from "../../common/Container";

export const Discover = () => {
  return (
    <Container>
      <div className="flex flex-col items-center capitalize gap-3 text-center">
        <h2 className="text-4xl font-medium">Collection</h2>
        <span className="text-2xl font-medium">
          Discover Our Exclusive NFT Collection.
        </span>
        <p className="lg:w-[1000px]">
          Explore our curated selection of digital artworks, each a unique
          masterpiece created by talented artists from around the world. From
          stunning visual designs to thought-provoking concepts, our NFTs offer
          a glimpse into the vibrant world of digital art.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-3">
          <CollectionCard img="/Collection.png" />
          <CollectionCard img="/Collection1.png" />
          <CollectionCard img="/Collection2.png" />
          <CollectionCard img="/Collection3.png" />
        </div>
        <Button color="secondary" className="mt-3 rounded w-[220px]">
          Explore the Collection
        </Button>
      </div>
    </Container>
  );
};
