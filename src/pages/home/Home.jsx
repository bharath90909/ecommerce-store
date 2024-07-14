import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
