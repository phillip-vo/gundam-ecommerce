import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { urlFor } from "../libs/client";
import { Button, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ProductCard from "./ProductCard";

type BestSellersProps = {
  bestSellerProducts: any;
};

function BestSellers({ bestSellerProducts }: BestSellersProps) {
  const [openBestSellerSection, setOpenBestSellerSection] =
    useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  const handleOpenBestSellerSection = () => {
    setOpenBestSellerSection(!openBestSellerSection);
  };

  console.log("best sellers:", bestSellerProducts);
  return (
    <div>
      <Accordion
        engTitle="Best Sellers"
        jpnTitle="ベストセラー"
        openSection={openBestSellerSection}
        handleOpenSection={handleOpenBestSellerSection}
      />
      {openBestSellerSection && (
        <div
          className={`d-flex flex-wrap justify-content-between gap-5 mt-5 ${
            isTabletOrMobile && "flex-column"
          }`}
        >
          {bestSellerProducts.map((product: any, index: any) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BestSellers;
