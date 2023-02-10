import React from "react";
import { BestSellers, Featured, HeroBanner, NewArrivals } from "../components";
import { client } from "../libs/client";

type HomeProps = {
  products: any;
  bannerData: any;
  featuredData: any;
  newArrivalData: any;
};

const Home = ({
  products,
  bannerData,
  featuredData,
  newArrivalData,
}: HomeProps) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Featured featuredProduct={featuredData.length && featuredData[0]} />
      <NewArrivals
        newArrivalProducts={newArrivalData.length && newArrivalData}
      />
      <BestSellers bestSellerProducts={products.length && products} />
    </div>
  );
};

// getServerSideProps is used from Next.js to fetch data from api
export const getServerSideProps = async () => {
  // fetching products from sanity
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  // fetching banner from sanity
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // fetch featured product from sanity
  const featuredQuery = '*[_type == "featured"]';
  const featuredData = await client.fetch(featuredQuery);

  // fetch new arrival products from sanity
  const newArrivalQuery = '*[_type == "newArrivals"]';
  const newArrivalData = await client.fetch(newArrivalQuery);

  return {
    props: { products, bannerData, featuredData, newArrivalData },
  };
};

export default Home;
