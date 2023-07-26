import React from "react";
import { Box, Toolbar, Container } from "@mui/material";

// Define the prop types for the LayoutHome component
interface LayoutProps {
    children: React.ReactNode;
}

const LayoutHome: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container maxWidth={false} style={{ padding: 0 }}>
            <Box component="main" sx={{ p: 0, paddingBottom: 20 }}>
                <Toolbar />
                {children}
            </Box>
        </Container>
    );
};

export default LayoutHome;
