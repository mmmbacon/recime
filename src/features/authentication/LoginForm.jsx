import React from 'react';
// import PropTypes from 'prop-types';
import {
  Box, Typography, FormControl, Input, InputLabel, FormHelperText, Paper, Button,
} from '@material-ui/core';

const LoginForm = () => (
  <Box display="flex" justifyContent="center">
    <Paper>
      <Box p={4} display="flex" flexDirection="column" width="300px">
        <Typography variant="h5">Login</Typography>
        <FormControl>
          <InputLabel htmlFor="input-email">Email address</InputLabel>
          <Input id="input-email" aria-describedby="my-helper-text" />
          <FormHelperText id="email-helper-text">We wont share your email</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-password">Password</InputLabel>
          <Input id="input-password" aria-describedby="my-helper-text" />
          <FormHelperText id="password-helper-text" />
        </FormControl>
        <Box display="flex" justifyContent="center" mt={3}>
          <Button>Login</Button>
          <Button>Register</Button>
        </Box>
      </Box>
    </Paper>
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

export default LoginForm;
