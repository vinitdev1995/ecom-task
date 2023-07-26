import React, { useMemo } from 'react';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Theme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux';
import LinesEllipsis from "react-lines-ellipsis";
import { toast } from 'react-toastify';
import { selectCart } from '../../redux/Cart/CartSelectors';
import {
    addToCart, decrementQuantity, removeProductFromCart,
    orderCheckout
} from '../../redux/Cart/CartSlice';

interface CartProps {
    isCartDrawerOpen: boolean;
    setIsCartDrawerOpen: (isCartDrawerOpen: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& ::-webkit-scrollbar": {
            width: '0',
        },
        "& ::-webkit-scrollbar-track": {
            background: '#f1f1f1'
        },
        "& ::-webkit-scrollbar-thumb": {
            background: '#888'
        },
        "& ::-webkit-scrollbar-thumb:hover": {
            background: '#555'
        }
    },
    cartHeader: {
        fontFamily: 'Poppins',
        letterSpacing: 0
    },
    countNumber: {
        fontFamily: 'Poppins',
        letterSpacing: 0,
        width: 25,
        textAlign: 'center'
    },
    imgContant: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        borderRadius: 10,
        padding: 5
    },
    imgStyle: {
        objectFit: 'contain'
    },
    productContant: {
        display: 'flex',
        alignItems: 'center',
    },
    mainContant: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        backgroundColor: '#c3cbdc',
        backgroundImage: 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)',
        padding: 10,
        borderRadius: 10
    },
    mainContantEmpty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        padding: 10,
        borderRadius: 10
    },
    main: {
        height: 'calc(100vh - 170px)',
        overflowY: 'scroll',
    }
}))


const Cart: React.FC<CartProps> = ({ isCartDrawerOpen, setIsCartDrawerOpen }) => {
    const classes = useStyles()
    const cardItems = useSelector(selectCart);
    const dispatch = useDispatch<any>();

    const totalPrice = useMemo(() => {
        return cardItems
            .map((ele: any) => Number(ele?.price) * Number(ele?.quantity))
            .reduce((total: number, amount: number) => total + amount, 0)
    }, [cardItems])

    const handleCheckout = () => {
        dispatch(orderCheckout())
        toast.success('Purchase was successful!')
    }

    const renderCartItems = () => {
        return (
            <>
                {(cardItems || []).map((obj: any, index: number) => {
                    return (
                        <Box component={"div"} className={classes.mainContant} key={`obj_${index}`}>
                            <Box component={"div"} onClick={() => dispatch(removeProductFromCart({ productId: obj?.id }))}>
                                <IconButton color='error'>
                                    <DeleteOutlineRoundedIcon color='error' />
                                </IconButton>
                            </Box>
                            <Box component={"div"}>
                                <Box component={"div"} className={classes.productContant}>
                                    <Box component={"div"} className={classes.imgContant}>
                                        <img src={obj?.image} alt='PRODUCT' width={"100%"} height={"100%"} className={classes.imgStyle} />
                                    </Box>
                                    <Box component={"div"} sx={{ marginLeft: 2 }}>
                                        <Typography className={classes.cartHeader}>
                                            <LinesEllipsis
                                                text={obj?.title}
                                                maxLine="1"
                                                ellipsis="..."
                                                trimRight
                                                basedOn="letters"
                                            />
                                        </Typography>
                                        <Typography className={classes.cartHeader}>
                                            1 x ${obj?.price}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box component={"div"} className={classes.productContant}>
                                <Box component={"div"}>
                                    <IconButton color='primary' onClick={() => dispatch(decrementQuantity({ productId: obj?.id }))}>
                                        <RemoveIcon color='primary' />
                                    </IconButton>
                                </Box>
                                <Box component={"div"}>
                                    <Typography className={classes.countNumber}>
                                        {obj?.quantity}
                                    </Typography>
                                </Box>
                                <Box component={"div"}>
                                    <IconButton color='primary' onClick={() => dispatch(addToCart(obj))}>
                                        <AddIcon color='primary' />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </>
        )
    }

    return (
        <Drawer
            anchor={'right'}
            open={isCartDrawerOpen}
            sx={{
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: { xs: "100%", sm: 500 },
                    padding: 4
                },
            }}
            className={classes.root}
        >
            <Box
                role="presentation"
            >
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" padding={0}>
                    <Typography
                        className={classes.cartHeader}
                    >
                        Your Cart
                    </Typography>
                    <IconButton onClick={() => setIsCartDrawerOpen(false)}>
                        <CloseIcon style={{ color: '#000' }} />
                    </IconButton>
                </Box>
                <Divider />
                <Box component={"div"} className={classes.main}>
                    {
                        cardItems.length ? renderCartItems() : (
                            <>
                                <Box component={"div"} className={classes.mainContantEmpty} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                    <Box component={"div"}  >
                                        No products added
                                    </Box>
                                </Box>
                            </>
                        )
                    }
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" marginTop={2} >
                    <Button disabled={cardItems?.length ? false : true} onClick={() => handleCheckout()} variant="contained" sx={{ display: 'flex', justifyContent: 'space-between' }} fullWidth>
                        <span>Checkout</span>
                        <span>$ {totalPrice?.toFixed(2) ?? '00.00'}</span>
                    </Button>
                </Box>
            </Box>
        </Drawer >
    )
}

export default React.memo(Cart);