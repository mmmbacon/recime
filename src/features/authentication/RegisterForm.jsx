import React from 'react';
// import PropTypes from 'prop-types';
import {
  Box, Typography, FormControl, Input, InputLabel, FormHelperText, Paper, Button,
} from '@material-ui/core';

const RegisterForm = () => (
  <Box display="flex" justifyContent="center">
    <Paper>
      <Box id="Register Title" display="flex" justifyContent="center" mt={4}>
        <Typography variant="h3" style={{ fontFamily: 'Kavoon' }} color="secondary">Recime!</Typography>
      </Box>
      <Box p={4} display="flex" flexDirection="column" width="300px">
        <Typography variant="h5">Register</Typography>
        <FormControl>
          <InputLabel htmlFor="input-email">Email address</InputLabel>
          <Input id="input-email" aria-describedby="email-helper-text" />
          <FormHelperText id="email-helper-text">We wont share your email</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-password">Password</InputLabel>
          <Input id="input-password" aria-describedby="password-helper-text" />
          <FormHelperText id="password-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-confirm-password">Confirm Password</InputLabel>
          <Input id="input-confirm-password" aria-describedby="password-confirm-helper-text" />
          <FormHelperText id="password-confirm-helper-text" />
        </FormControl>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box mr={1}>
            <Button variant="contained" color="secondary">Login</Button>
          </Box>
          <Box ml={1}>
            <Button variant="contained" color="secondary">Register</Button>
          </Box>
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

export default RegisterForm;
