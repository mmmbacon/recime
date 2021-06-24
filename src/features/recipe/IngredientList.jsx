import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const IngredientList = (props) => {
  const { ingredients } = props;

  const ingredientList = ingredients.map((item) => (
    <li>
      <Typography variant="body1">
        {item.name}
        {item.quantity}
        {item.unit}
      </Typography>
    </li>
  ));

  return (
    <div>
      <Typography variant="h6">Ingredients</Typography>
      <StyledList>
        {ingredientList}
      </StyledList>
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.instanceOf(Array),
};

IngredientList.defaultProps = {
  ingredients: [],
};

export default IngredientList;
