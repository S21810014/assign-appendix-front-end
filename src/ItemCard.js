import { Grid, Paper, Rating,Typography } from '@mui/material'
import React from 'react'
import ListIcon from '@mui/icons-material/List'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function ItemCard({image}) {
    return (
        <Paper elevation={3}>
            <Grid container sx={{padding: '0.5em', boxSizing: 'border-box'}}>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#f7f7f7', color: '#b3b3b3', display: 'flex', justifyContent: 'center', padding: '0.5em', borderRadius: '0.5em', boxSizing: 'border-box'}}>
                    <Typography>
                        New
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', opacity: 0.3}}>
                    <ListIcon/>
                    <FavoriteBorderIcon/>
                </Grid>
                <Grid item xs={12} sx={{height: '5em', marginTop: '2em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={image}/>
                </Grid>
                <Grid item xs={12} sx={{marginBottom: '2em', marginTop: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography>
                    Image Caption
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Rating value={4} readOnly size="small"/>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={6}>
                    <Grid container sx={{border: '1px solid rgba(0, 0, 0, 0.3)', borderRadius: '0.3em'}}>
                    <Grid item xs={7} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography fontSize={12} fontWeight={500}>Rp. 12.000</Typography>
                    </Grid>
                    <Grid item xs={5} sx={{borderLeft: 1, borderColor: 'rgba(0, 0, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3}}>
                        <ShoppingCartIcon/>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ItemCard
