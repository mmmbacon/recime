import React from 'react';
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

const RecipeCard = () => (
  <StyledPaper>
    <Grid container>
      <Grid item xs="12">
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box mb={1}>
            <Typography variant="h5">This is a recipe</Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <FavoriteIcon />
            <Typography variant="caption" align="center">12</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item><Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus doloremque minima fugit natus esse temporibus magnam incidunt, ad facilis eos, atque suscipit repudiandae consectetur iste illo sequi ratione vel labore numquam repellendus voluptatibus sed. Facere, consequatur. Molestias magni vero iste error dolore. Modi facilis beatae officiis maiores non, eaque rem.</Typography></Grid>
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
              comments (0)
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </StyledPaper>
);

export default RecipeCard;
