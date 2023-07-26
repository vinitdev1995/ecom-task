import React from "react";
import {
    Grid,
    Box,
    Skeleton,
} from "@mui/material";

export const ProductListingSkeleton: React.FC = () => {
    return (
        <>
            {Array.from(new Array(4)).map((_, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} display={"flex"}>
                        <Box sx={{ width: 210, my: 5, mx: 5 }}>
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Box>
                    </Grid>
                );
            })}
        </>
    );
};

export const ProductDetailsSkeleton: React.FC = () => {
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Skeleton variant="rectangular" width={"100%"} height={210} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton width="60%" />
                </Box>
            </Grid>
        </>
    );
};
