import React from 'react';
// import PropTypes from 'prop-types';
import {
  Box,
} from '@material-ui/core';

import LoginForm from './LoginForm';

const Login = () => (
  <Box id="Login Component" display="flex" flexDirection="column" justifyContent="center" alignContent="center" height="100%">
    <LoginForm />
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

export default Login;
