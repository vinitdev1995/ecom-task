import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import {
    Grid,
    Typography,
    CardContent,
    Theme,
    Slide,
    Box,
    Button
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Define the interface for the `item` prop
interface Item {
    title: string;
    image: string;
    price: string;
    id: string;
}

// Define the prop types for the ProductCard component
interface ProductCardProps {
    item: Item;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& .css-o5y37b-MuiTypography-root": {
            fontFamily: 'Poppins',
            letterSpacing: 1
        },
        "& .css-46bh2p-MuiCardContent-root": {
            padding: 0,
            marginTop: 10
        }
    },
    media: {
        height: 140,
        [theme.breakpoints.up("sm")]: {
            height: 200,
        },
    },
    mainCard: {
        height: 300,
    },
    price: {
        fontFamily: 'Poppins',
    },
    subCard: {
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: '#b8c6db',
        backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
        overflow: 'hidden',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10
    },
    viewBtn: {
        backgroundColor: "#fff",
        cursor: "pointer",
        textAlign: "center",
        color: "#000",
        borderRadius: 34,
        fontSize: 15,
        padding: "8px 20px",
        fontFamily: 'Poppins',
        letterSpacing: 1,
        width: "max-content",
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
        }
    },
    btnContent: {
        position: "absolute",
        bottom: "10px",
        width: "100%",
        transition: "0.8s ease-in-out",
        textAlign: 'center'
    },
    imgstyle: {
        transition: "0.9s ease-in-out",
        mixBlendMode: 'darken',
        width: "80%",
        height: "80%",
        objectFit: 'contain'
    }
}));



const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false)

    return (
        <Grid item xs={12} sm={6} lg={3} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} key={`item_22222${item.id}`} className={classes.root}>
            <Box component={"div"} className={classes.mainCard}>
                <Box component={"div"} className={classes.subCard}>
                    <img src={item?.image} alt="PRODUCT" className={classes.imgstyle} style={{ transform: isHover ? 'scale(1.1)' : 'scale(1.0)' }} />
                    <Slide direction="up" in={isHover} style={{ transitionDelay: isHover ? '300ms' : '0ms' }}>
                        <Box component={"div"} className={classes.btnContent}>
                            <Button className={classes.viewBtn} onClick={() => navigate(`/product-details/${item?.id}`)} >
                                Quick View
                            </Button>
                        </Box>
                    </Slide>
                </Box>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="body1" component="h4">
                    <LinesEllipsis
                        text={item?.title}
                        maxLine="1"
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                    />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
                    ${item?.price}
                </Typography>
            </CardContent>
        </Grid>
    );
};

export default React.memo(ProductCard);
