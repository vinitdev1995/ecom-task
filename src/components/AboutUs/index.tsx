import React from 'react'
import { Box, Theme, Typography, Grid, Container, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'

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
    }
}));

const AboutUs: React.FC = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="xl" >
            <Grid container spacing={4} style={{ marginTop: 20 }}>
                <Grid item xs={12}>
                    <Typography className={classes.title} >What We Are</Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid container spacing={4} style={{ marginTop: 20, marginBottom: 20 }}>
                <Grid item xs={12} md={12}>
                    <Box>
                        <Typography variant="body1" >
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default AboutUs