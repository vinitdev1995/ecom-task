import React, { useEffect } from "react";
import { Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import LayoutHome from "../../components/Layout/HomeLayout";
import TrandingProduct from "../../components/TrandingProduct";
import FeatureCategory from "../../components/FeatureCategory";
import { getProducts } from "../../redux/Product/ProductThunks";
import AboutUs from "../../components/AboutUs";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(getProducts("/products?limit=4"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <LayoutHome>
        <HeroSection />
        <FeatureCategory />
        <Toolbar />
        <TrandingProduct />
        <Toolbar />
        <AboutUs />
        <Toolbar />
      </LayoutHome>
      <Footer />
    </>
  );
};

export default Home;
