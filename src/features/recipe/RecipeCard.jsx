import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Paper, Grid, Typography, Box, IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const StyledPaper = styled(Paper)`
  padding: 10px;
  margin: 10px;
`;

const RecipeCard = (props) => {
  const { data } = props;

  const ingredientList = data.ingredient_list.map((item) => (
    <li>
      <Typography variant="body1">
        {item.name}
        {item.quantity}
        {item.unit}
      </Typography>
    </li>
  ));

  return (
    <StyledPaper>
      <Grid container>
        <Grid item xs="12">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box mb={1}>
              <Typography variant="h5">{data.title}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <FavoriteIcon />
              <Box pl={0.5}>
                <Typography variant="caption" align="center">{data.favourites}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" flexDirection="column">
            <Typography variant="body1">{data.description}</Typography>
            <ul>
              {ingredientList}
            </ul>
          </Box>
        </Grid>
        <Grid item xs="12">
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
        </Grid>
      </Grid>
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
    ingredient_list: [],
  },
};

export default RecipeCard;
