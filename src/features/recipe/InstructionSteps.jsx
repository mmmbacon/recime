import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';

const StyledList = styled.ol`
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

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
    <div>
      <Box pl={1}><Typography variant="h6">Steps:</Typography></Box>
      <StyledList>
        {stepList}
      </StyledList>
    </div>
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
