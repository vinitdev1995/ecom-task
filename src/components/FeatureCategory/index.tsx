import React, { useState } from 'react'
import { Box, Theme, Typography, Grid, Container, Slide, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { featureCategory } from '../../constants'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& .slick-arrow": {
            display: "none !important"
        }
    },
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
    mainSubTitle: {
        fontSize: 28,
        fontWeight: 600,
        letterSpacing: 0,
        [theme.breakpoints.down("md")]: {
            fontSize: 14,
        }
    },
    mainTitle: {
        fontSize: 14,
        letterSpacing: 0,
        fontWeight: 500,
    },
    shopBtn: {
        letterSpacing: 0,
    },
    imagePosition: {
        background: 'rgb(103 117 214)',
        height: 270,
        border: '1px solid #e6e6e6',
        position: 'relative',
        overflow: 'hidden',
        letterSpacing: 0,
    },
    imageStyle: {
        objectFit: 'cover'
    },
    textPosition: {
        position: 'absolute',
        top: 20,
        left: 30
    },
    imgstyle: {
        transition: "0.9s ease-in-out",
    }
}))

const FeatureCategory: React.FC = () => {
    const classes = useStyles()
    const [isHover, setIsHover] = useState<number | null>(null);

    return (
        <Container maxWidth="xl" >
            <Grid container spacing={4} style={{ marginTop: 20 }}>
                <Grid item xs={12}>
                    <Typography className={classes.title} >Feature Category</Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container spacing={4} style={{ marginTop: 20 }} justifyContent={"center"}>
                {featureCategory.map((obj, ind) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} onMouseEnter={() => setIsHover(ind)} onMouseLeave={() => setIsHover(null)} key={`itemasdasda_${ind}`}>
                            <Box component={"div"} className={classes.imagePosition}>
                                <img src={obj?.image} alt='PRODUCT' width={'100%'} height={'100%'} className={classes.imgstyle} style={{ opacity: isHover === ind ? 0.5 : 1, transform: isHover === ind ? 'scale(1.1)' : 'scale(1.0)' }} />
                                <Box component={"div"} style={{ position: 'absolute', top: 20, left: 30 }}>
                                    <Typography className={classes.mainSubTitle} style={{ color: isHover === ind ? "#FFF" : "#000" }}>{obj?.desc}</Typography>
                                    <Typography className={classes.mainTitle} style={{ color: isHover === ind ? "#FFF" : "#000" }}>{obj?.title}</Typography>
                                </Box>
                                <Slide direction="down" in={isHover === ind ? true : false} style={{ transitionDelay: isHover === ind ? '300ms' : '0ms' }}>
                                    <Box component={"div"} style={{ position: 'absolute', bottom: 20, left: 30 }}>
                                        <Typography className={classes.shopBtn} style={{ color: isHover === ind ? "#FFF" : "#000", borderBottom: isHover === ind ? "2px solid #fff" : "2px solid #000" }}>Shop Now</Typography>
                                    </Box>
                                </Slide>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
export default FeatureCategory