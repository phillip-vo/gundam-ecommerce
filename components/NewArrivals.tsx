import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { urlFor } from "../libs/client";
import { Button, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

type NewArrivalProps = {
  newArrivalProducts: any;
};

function NewArrivals({ newArrivalProducts }: NewArrivalProps) {
  const [openNewArrivalSection, setOpenNewArrivalSection] =
    useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  const handleOpenNewArrivalSection = () => {
    setOpenNewArrivalSection(!openNewArrivalSection);
  };
  return (
    <div>
      <Accordion
        engTitle="New Arrivals"
        jpnTitle="来立て"
        openSection={openNewArrivalSection}
        handleOpenSection={handleOpenNewArrivalSection}
      />
      <div className="mt-4">
        {openNewArrivalSection &&
          newArrivalProducts.map((product: any, index: any) => (
            <div
              key={product.name}
              className={`d-flex justify-content-between mt-5 ${
                isTabletOrMobile && "flex-column"
              }`}
            >
              <Image
                fluid
                src={urlFor(product.image[0]).url()}
                alt={product.name}
                width={isTabletOrMobile ? "100%" : "50%"}
                className={index % 2 !== 0 ? "order-2" : "order-1"}
              />
              <div
                className={`d-flex justify-content-center align-items-center ${
                  isTabletOrMobile ? "order-2" : "order-1"
                }`}
                style={isTabletOrMobile ? { width: "100%" } : { width: "50%" }}
              >
                <div
                  className={`d-flex flex-column ${
                    isTabletOrMobile && "align-items-center"
                  }`}
                >
                  <h3 style={styles.newArrivalSubtitle}>
                    {product.japaneseName}
                  </h3>
                  <h4 style={styles.newArrivalText}>{product.model}</h4>
                  <h2 className="fs-1" style={styles.newArrivalTitle}>
                    {product.name}
                  </h2>
                  <span style={styles.newArrivalText}>{product.series}</span>
                  <span style={styles.newArrivalText}>
                    PILOT: {product.pilot}
                  </span>
                  <Button
                    variant="dark"
                    className="mt-3"
                    style={styles.newArrivalButton}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const styles = {
  newArrivalTitle: {
    fontFamily: "Jura",
    color: "#616161",
    fontWeight: 700,
  },
  newArrivalSubtitle: {
    fontFamily: "Jura",
    color: "#BABABA",
  },
  newArrivalText: {
    fontFamily: "Jura",
    color: "#616161",
  },
  newArrivalButton: {
    width: "100px",
  },
};

export default NewArrivals;
