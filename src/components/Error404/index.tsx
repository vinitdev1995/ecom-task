import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import error from '../../assets/error-404.json';
import Layout from "../Layout";
import Header from "../Header";
import Footer from "../Footer";

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <Header />
            <Layout>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />
                    <Button variant="contained" onClick={() => navigate('/')} color='primary'>
                        Go back to Home
                    </Button>
                </div>
            </Layout>
            <Footer />
        </>
    )

}

export default ErrorPage;