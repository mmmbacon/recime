import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

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
    <ul>
      {ingredientList}
    </ul>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.instanceOf(Array),
};

IngredientList.defaultProps = {
  ingredients: [],
};

export default IngredientList;
