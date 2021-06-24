import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Paper, Box, Typography, IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IngredientList from './IngredientList';
import InstructionSteps from './InstructionSteps';

const StyledPaper = styled(Paper)`
  padding: 10px;
  margin: 10px;
`;

const dummyData = [
  'Remove Egg from Carton',
  'Crack Egg on counter',
  'Pour Egg into Bowl',
  'Whisk Egg with Beater Until frothy'];

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

const RecipeCard = (props) => {
  const { data } = props;

  return (
    <StyledPaper>
      <Box display="flex" flexDirection="column">
        <Box>
          <Box display="flex" flexDirection="row">
            <Box p={1} display="flex" flexDirection="column" alignItems="center" alignContent="center" justifyContent="center">
              <img src="https://spoonacular.com/recipeImages/579247-90x90.jpg" alt="foodpic" />
            </Box>
            <Box justifyContent="space-between" alignItems="center">
              <Box mb={1}>
                <Typography variant="h5">{data.title}</Typography>
              </Box>
              <Typography variant="body1">{data.description}</Typography>
              <Box display="flex" flexDirection="row" alignItems="center">
                <FavoriteIcon />
                <Box pl={0.5}>
                  <Typography variant="caption" align="center">{data.favourites}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Box>
                <Box display="flex" flexDirection="column">
                  <IngredientList ingredients={data.ingredient_list} />
                  <InstructionSteps steps={dummyData} />
                </Box>
              </Box>
              <Box xs="12">
                <Box display="flex" flexDirection="row" alignItems="center" m={1} justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <IconButton size="small" color="primary">
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <ArrowDownwardIcon />
                    </IconButton>
                    <Box ml={1}>
                      <Typography variant="body1">Vote!</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      comments (
                      {data.comments.length}
                      )
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledPaper>
  );
};

RecipeCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    avg_rating: PropTypes.number,
    favourites: PropTypes.number,
    comments: PropTypes.instanceOf(Array),
    ingredient_list: PropTypes.instanceOf(Array),
  }),
};

RecipeCard.defaultProps = {
  data: {
    title: 'Recipe',
    description: 'This is a fantastic recipe',
    avg_rating: 5,
    favourites: 10,
    comments: [],
    ingredient_list: [ingredient1, ingredient2],
  },
};

export default RecipeCard;
