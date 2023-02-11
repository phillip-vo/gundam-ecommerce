import Link from "next/link";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { client, urlFor } from "../../libs/client";
import { useMediaQuery } from "react-responsive";

const styles = {
  banner: {
    opacity: ".1",
  },
  japaneseName: {
    top: "50%",
    transform: "translate(0, -50%)",
    color: "#616161",
  },
  title: {
    fontFamily: "Jura",
    color: "#616161",
    fontWeight: 700,
  },
  subtitle: {
    fontFamily: "Jura",
    color: "#BABABA",
  },
  text: {
    fontFamily: "Jura",
    color: "#616161",
  },
  button: {
    width: "200px",
  },
  back: {
    fontFamily: "Jura",
    color: "#616161",
    textDecoration: "none",
  },
  thumbnail: {
    cursor: "pointer",
  },
};

type FeatureProductDetailsProps = {
  product: any;
};

const FeatureProductDetails = ({ product }: FeatureProductDetailsProps) => {
  const { image, name, details, price, japaneseName, model, series, pilot } =
    product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  console.log("Product:", product);

  return (
    <div className="m-5">
      <Link href="/" style={styles.back}>
        Back
      </Link>
      <div
        className={`d-flex mt-5 ${
          isTabletOrMobile && "flex-column align-items-center"
        }`}
      >
        <div className="w-50 d-flex flex-column align-items-center">
          <Image
            src={urlFor(image && image[currentImageIndex]).url()}
            alt={name}
            width={isBigScreen ? 550 : 450}
            height={isBigScreen ? 385 : 315}
          />
          <div className="d-flex mt-3 gap-2 justify-content-center">
            {image.map((img: any, index: any) => (
              <Image
                key={index}
                src={urlFor(image && image[index]).url()}
                alt={name}
                width={100}
                height={70}
                onClick={() => setCurrentImageIndex(index)}
                style={styles.thumbnail}
                className={
                  index === currentImageIndex ? "opacity-100" : "opacity-75"
                }
              />
            ))}
          </div>
        </div>
        <div className={`w-50 ${isTabletOrMobile && "w-100 mt-5"}`}>
          <div className="position-relative">
            <Image
              fluid
              src="/images/gray-banner.png"
              alt=""
              style={styles.banner}
            />
            <h3 className="position-absolute ms-3" style={styles.japaneseName}>
              {japaneseName}
            </h3>
          </div>
          <div className="p-3 d-flex flex-column">
            <h4 style={styles.text}>{model}</h4>
            <h1 style={styles.title}>{name}</h1>
            <span style={styles.text}>{series}</span>
            <span style={styles.text}>PILOT: {pilot}</span>
            <span className="mt-2" style={styles.title}>
              Description:
            </span>
            <span style={styles.text}>{details}</span>
            <h3 className="mt-3" style={styles.title}>
              $ {price}
            </h3>
          </div>
          <div className="d-flex ms-3 mt-3 justify-content-start gap-4">
            <Button variant="outline-dark" style={styles.button}>
              Add
            </Button>
            <Button variant="dark" style={styles.button}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "featured"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "featured" && slug.current == '${slug}'][0]`;

  const product = await client.fetch(query);

  return {
    props: { product },
  };
};

export default FeatureProductDetails;
