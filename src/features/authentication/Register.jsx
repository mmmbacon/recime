import React from 'react';
// import PropTypes from 'prop-types';
import {
  Box,
} from '@material-ui/core';

import RegisterForm from './RegisterForm';

const Register = () => (
  <Box id="Login Component" display="flex" flexDirection="column" justifyContent="center" alignContent="center" height="100%">
    <RegisterForm />
  </Box>
);

// Login.propTypes = {
//   steps: PropTypes.instanceOf(Array),
// };

// Login.defaultProps = {
//   steps: [{
//     description: 'Remove Egg from the Carton',
//   }],
// };

export default Register;
