import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography, TextField, InputAdornment, Button, Theme } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductListingSkeleton } from "../Skeletons";
import {
    selectAllProducts,
    selectIsLoading,
} from "../../redux/Product/ProductSelectors";
import ProductCard from "../ProductCard";

const useStyles = makeStyles((theme: Theme) => ({
    searchBtn: {
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
        borderRadius: 100
    }
}))

const renderProductCard = (productList: []) => {
    return productList.map((item: any, index: number) => {
        return <ProductCard key={index} item={item} />;
    });
};

const ProductList = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const productArr = useSelector(selectAllProducts);
    const isLoading = useSelector(selectIsLoading);
    const [productList, setProductList] = useState<[]>([]);
    const [searchVal, setSearchVal] = useState<string>('');

    const handleInputChange = (val: string) => {
        if (val.trim()) {
            setSearchVal(val)
        } else {
            setSearchVal('')
        }
    }

    const handleSearch = () => {
        const searchQuery = searchVal?.trim().toLowerCase();
        if (searchQuery) {
            const filteredData = productArr.filter((item: any) => {
                return (
                    item?.title.toLowerCase().includes(searchQuery) ||
                    item?.category.toLowerCase().includes(searchQuery)
                );
            });
            setProductList(filteredData)
        } else {
            setProductList(productArr);
        }
    }

    const goBackHome = () => {
        setSearchVal('')
        setProductList(productArr)
        navigate("/")
    }

    useEffect(() => {
        setProductList(productArr)
    }, [productArr])

    return (
        <Grid container spacing={4}>
            <Grid container item xs={12} justifyContent={'center'}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        value={searchVal}
                        onChange={(e) => handleInputChange(e.target.value)}
                        InputProps={{
                            style: { height: 50, fontFamily: 'Poppins', letterSpacing: 1, padding: 7, borderRadius: 100 },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon style={{ fontSize: 30, color: "#000" }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button onClick={() => handleSearch()} variant="contained" color="info" className={classes.searchBtn}>Search</Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
            {isLoading && (
                <>
                    <ProductListingSkeleton />
                    <ProductListingSkeleton />
                </>
            )}
            {
                !isLoading && productList.length === 0 && (<Grid
                    alignItems="center"
                    item
                    xs={12}
                >
                    <Box display={"flex"} alignItems={"center"} flexDirection={"column"} component={"div"} height={400}>
                        <Typography variant="h4" color="initial">
                            No Items Found
                        </Typography>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => goBackHome()}
                            sx={{ marginTop: 2 }}
                        >
                            Back to home
                        </Button>
                    </Box>
                </Grid>)
            }
            {!isLoading && productList.length > 0 ? renderProductCard(productList) : null}
        </Grid >
    );
};

export default ProductList;
