import React from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <div>
      <HeroImage />
      <Products />
      <BlogPosts />
    </div>
  );
};

export default Home;
