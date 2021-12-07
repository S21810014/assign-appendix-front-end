import { Container, Grid, Paper,Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ItemCard from './ItemCard'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

function App() {
  return (
    <div>
      <Container maxWidth="md" sx={{paddingTop: '1em'}}>
        <Paper elevation={3} sx={{marginBottom: '1em'}}>
          <Grid container direction='row' sx={{padding: '0em 1em 0em 1em'}}>
            <Grid item xs={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', opacity: 0.5}}>
              <Typography>
                All Types
              </Typography>
              <KeyboardArrowDownIcon/>
            </Grid>
            <Grid item xs={8} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Tabs value={0}>
                <Tab label="Popular Products"/>
                <Tab label="Low Price"/>
                <Tab label="High Price"/>
              </Tabs>
            </Grid>
            <Grid item xs={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', opacity: 0.5}}>
              <Typography>
                Price
              </Typography>
              <KeyboardArrowDownIcon/>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={2} sx={{boxSizing: 'border-box'}}>
          <Grid item xs={4}>
            <ItemCard image={img1}/>
          </Grid>
          <Grid item xs={4}>
            <ItemCard image={img2}/>
          </Grid>
          <Grid item xs={4}>
            <ItemCard image={img3}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
