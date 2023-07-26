import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Toolbar from "@mui/material/Toolbar";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import { getProducts } from "../../redux/Product/ProductThunks";

const Products: React.FC = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getProducts("/products"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Layout>
                <ProductList />
                <Toolbar />
            </Layout>
            <Footer />
        </>
    );
};

export default Products;
