import React from 'react';
import {
  Container, Grid, AppBar, Toolbar, Box, Typography,
} from '@material-ui/core';
import RecipeCard from '../recipe/RecipeCard';

const ingredient1 = {
  name: 'milk',
  quantity: 5,
  unit: 'oz',
};

const ingredient2 = {
  name: 'salt',
  quantity: 1,
  unit: 'tsp',
};

const dummyData = {
  title: 'Recipe',
  description: 'My Nice Recipe',
  avg_rating: 3,
  favourites: 10,
  comments: [],
  ingredient_list: [ingredient1, ingredient2],
};

const Dashboard = () => (
  <Box>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h4" style={{ fontFamily: 'Kavoon' }}>Recime!</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Grid container>
        <Grid item />
        <Grid item>
          <RecipeCard data={dummyData} />
        </Grid>
        <Grid item>
          <RecipeCard data={dummyData} />
        </Grid>
        <Grid item>
          <RecipeCard data={dummyData} />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Dashboard;
