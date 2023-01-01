import React from "react";
import Image from "react-bootstrap/Image";
import { urlFor } from "../libs/client";
import { bannerData } from "../types/HeroType";

type HeroBannerProps = {
  heroBanner: bannerData;
};

function HeroBanner({ heroBanner }: HeroBannerProps) {
  return (
    <div className="mt-5">
      <Image fluid src={urlFor(heroBanner.image)} alt="hero banner" />
    </div>
  );
}

export default HeroBanner;
