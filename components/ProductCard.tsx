import React from "react";
import { urlFor } from "../libs/client";
import { Button, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

type ProductCardProps = {
  product: any;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
  return (
    <div
      className="d-flex flex-column"
      style={styles.ProductCard(isTabletOrMobile)}
    >
      <h3 style={styles.productSubtitle}>{product.japaneseName}</h3>
      <Image
        src={urlFor(product.image[0]).url()}
        alt={product.name}
        className="mx-auto"
        width={300}
        height={450}
      />
      <div className="d-flex flex-column align-items-center">
        <h4 style={styles.productText}>{product.model}</h4>
        <h2 style={styles.productTitle}>{product.name}</h2>
        <span style={styles.productText}>{product.series}</span>
        <span style={styles.productText}>PILOT: {product.pilot}</span>
        <Link href={`/product/${product.slug.current}`} passHref>
          <Button variant="dark" className="mt-3" style={styles.productButton}>
            Add
          </Button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  ProductCard: (isTabletMobile: boolean) => ({
    width: isTabletMobile ? "100%" : "30%",
  }),
  productTitle: {
    fontFamily: "Jura",
    color: "#616161",
    fontWeight: 700,
  },
  productSubtitle: {
    fontFamily: "Jura",
    color: "#BABABA",
  },
  productText: {
    fontFamily: "Jura",
    color: "#616161",
  },
  productButton: {
    width: "100px",
  },
};

export default ProductCard;
