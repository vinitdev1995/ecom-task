import React from 'react'
import Slider from 'react-slick'
import { Box, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { slickSetting } from '../../constants'
import { heroImages } from '../../constants'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& .slick-arrow": {
            display: "none !important"
        }
    },
    mainSubTitle: {
        fontSize: 30,
        letterSpacing: 0,
        [theme.breakpoints.down("md")]: {
            fontSize: 15,
        }
    },
    mainTitle: {
        fontSize: 60,
        letterSpacing: 0,
        [theme.breakpoints.down("lg")]: {
            fontSize: 30,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 20,
        }
    },
    shopBtn: {
        background: '#000',
        color: '#FFF',
        boxShadow: "none",
        borderRadius: 100,
        padding: '10px 30px',
        marginTop: 20,
        "&:hover": {
            color: '#000',
            background: '#FFF',
        }
    },
    imagePosition: {
        height: '800px',
        width: '100%',
        position: 'relative',
        [theme.breakpoints.down("sm")]: {
            height: '400px',
        }
    },
    imageStyle: {
        objectFit: 'cover'
    },
    textPosition: {
        position: 'absolute',
        top: '40%',
        left: '15%',
        [theme.breakpoints.down("sm")]: {
            left: '10%',
        }
    }
}))
const HeroSection: React.FC = () => {
    const classes = useStyles();

    return (
        <Box component={"div"} className={classes.root}>
            <Slider {...slickSetting}>
                {heroImages.map((obj: any, ind: number) => {
                    return (
                        <div key={ind}>
                            <div className={classes.imagePosition}>
                                <img
                                    alt="img"
                                    src={obj?.image}
                                    width={"100%"}
                                    height={"100%"}
                                    className={classes.imageStyle}
                                />
                                <div className={classes.textPosition}>
                                    <Typography className={classes.mainSubTitle}>
                                        {obj?.desc}
                                    </Typography>
                                    <Typography className={classes.mainTitle}>
                                        {obj?.title}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </Box>

    )
}
export default HeroSection