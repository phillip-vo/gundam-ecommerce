import React from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { urlFor } from "../libs/client";

type HeroBannerProps = {
  heroBanner: any;
};

function HeroBanner({ heroBanner }: HeroBannerProps) {
  return (
    <div className="mt-5 text-center">
      <Image fluid src={urlFor(heroBanner.image).url()} alt="hero banner" />
      <Button variant="dark" className="mt-3" style={styles.productButton}>
        Explore
      </Button>
    </div>
  );
}

const styles = {
  productButton: {
    width: "150px",
    fontSize: "1.5rem",
  },
};

export default HeroBanner;
