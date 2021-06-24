import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const InstructionSteps = (props) => {
  const { steps } = props;

  const stepList = steps.map((item) => (
    <li>
      <Typography variant="body1">
        {item}
      </Typography>
    </li>
  ));

  return (
    <ol>
      {stepList}
    </ol>
  );
};

InstructionSteps.propTypes = {
  steps: PropTypes.instanceOf(Array),
};

InstructionSteps.defaultProps = {
  steps: [{
    description: 'Remove Egg from the Carton',
  }],
};

export default InstructionSteps;
