import React, { useState } from 'react'
import { Box, Button, Theme, Typography, Grid, Container, Slide, CardContent, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LinesEllipsis from 'react-lines-ellipsis'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllProducts, selectIsLoading } from '../../redux/Product/ProductSelectors'
import { ProductListingSkeleton } from '../Skeletons'

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontSize: 36,
        letterSpacing: 0,
        fontWeight: 500,
        [theme.breakpoints.down("lg")]: {
            fontSize: 30,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 20,
        }
    },
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
}))

const TrandingProduct: React.FC = () => {
    const classes = useStyles()
    const [isHover, setIsHover] = useState<number | null>(null);
    const navigate = useNavigate();
    const productList = useSelector(selectAllProducts);
    const isLoading = useSelector(selectIsLoading);

    return (
        <Container maxWidth="xl" >
            <Grid container spacing={4} style={{ marginTop: 20 }}>
                <Grid item xs={12}>
                    <Typography className={classes.title} >Tranding Category</Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container spacing={4} style={{ marginTop: 20, marginBottom: 20 }}>
                {isLoading ? (<ProductListingSkeleton />) : (
                    <>
                        {productList.map((item: any, ind: number) => {
                            return (
                                <Grid item xs={12} sm={6} lg={3} onMouseEnter={() => setIsHover(ind)} onMouseLeave={() => setIsHover(null)} key={`item_ssss${ind}`} className={classes.root}>
                                    <Box component={"div"} className={classes.mainCard}>
                                        <Box component={"div"} className={classes.subCard}>
                                            <img src={item?.image} alt="PRODUCT" className={classes.imgstyle} style={{ transform: isHover === ind ? 'scale(1.1)' : 'scale(1.0)' }} />
                                            <Slide direction="up" in={isHover === ind ? true : false} style={{ transitionDelay: isHover === ind ? '300ms' : '0ms' }}>
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
                            )
                        })}
                    </>
                )}
            </Grid>
        </Container>
    )
}
export default TrandingProduct