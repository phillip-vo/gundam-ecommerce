import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { urlFor } from "../libs/client";
import { Button, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

type FeaturedProps = {
  featuredProduct: any;
};

function Featured({ featuredProduct }: FeaturedProps) {
  const [openFeaturedSection, setOpenFeaturedSection] =
    useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  const handleOpenFeaturedSection = () => {
    setOpenFeaturedSection(!openFeaturedSection);
  };

  return (
    <div>
      <Accordion
        engTitle="Featured"
        jpnTitle="フィーチャ"
        openSection={openFeaturedSection}
        handleOpenSection={handleOpenFeaturedSection}
      />
      {openFeaturedSection && (
        <div className="text-center position-relative">
          <Image
            fluid
            src={urlFor(featuredProduct.featuredImage).url()}
            alt={featuredProduct.name}
          />
          <div
            className={`d-flex flex-column w-50 mx-auto ${
              !isTabletOrMobile
                ? "position-absolute align-items-start"
                : "align-items-center"
            }`}
            style={{ bottom: "25px" }}
          >
            <h3 style={styles.featuredSubtitle}>
              {featuredProduct.japaneseName}
            </h3>
            <h4 style={styles.featuredText}>{featuredProduct.model}</h4>
            <h2 className="fs-1" style={styles.featuredTitle}>
              {featuredProduct.name}
            </h2>
            <span style={styles.featuredText}>{featuredProduct.series}</span>
            <span style={styles.featuredText}>
              PILOT: {featuredProduct.pilot}
            </span>
            <Link href={`/featured/${featuredProduct.slug.current}`} passHref>
              <Button
                variant="dark"
                className="mt-3"
                style={styles.featuredButton}
              >
                Add
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  featuredTitle: {
    fontFamily: "Jura",
    color: "#616161",
    fontWeight: 700,
  },
  featuredSubtitle: {
    fontFamily: "Jura",
    color: "#BABABA",
  },
  featuredText: {
    fontFamily: "Jura",
    color: "#616161",
  },
  featuredButton: {
    width: "100px",
  },
};

export default Featured;
