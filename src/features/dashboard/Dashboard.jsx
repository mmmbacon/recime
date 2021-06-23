import React from 'react';
import { Container, Grid } from '@material-ui/core';
import RecipeCard from '../recipe/RecipeCard';

const Dashboard = () => (
  <Container>
    <Grid container>
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
);

export default Dashboard;
