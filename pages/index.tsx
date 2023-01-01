import React from "react";
import Head from "next/head";
import Image from "next/image";
import { HeroBanner } from "../components";
import { client } from "../libs/client";
import { bannerData } from "../types/HeroType";

type HomeProps = {
  products: any;
  bannerData: bannerData;
};

const Home = ({ products, bannerData }: HomeProps) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
    </div>
  );
};

// getServerSideProps is used from Next.js to fetch data from api
export const getServerSideProps = async () => {
  // fetching products from sanity
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // fetching banner from sanity
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
