import React from 'react';
import {
  Container, Grid, AppBar, Toolbar, Box, Typography,
} from '@material-ui/core';
import RecipeCard from '../recipe/RecipeCard';

const Dashboard = () => (
  <Box>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h4">RECIME </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Grid container>
        <Grid item />
        <Grid item>
          <RecipeCard />
        </Grid>
        <Grid item>
          <RecipeCard />
        </Grid>
        <Grid item>
          <RecipeCard />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Dashboard;
