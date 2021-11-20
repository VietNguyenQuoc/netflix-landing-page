import React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  FormLabel,
  Divider,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";
import { styled } from "@mui/system";
import emotion from "@emotion/styled";

const CustomTextField = (props: any) => {
  const { field, form, meta, label, ...rest } = props;
  const { hiddenLabel } = rest;

  const touched = form.touched[field.name];
  const error = form.errors[field.name];

  return (
    <>
      {hiddenLabel && Boolean(label) && (
        <FormLabel htmlFor={field.name} sx={{ fontSize: "0.875rem" }}>
          {label}
        </FormLabel>
      )}
      <TextField
        {...field}
        {...rest}
        error={Boolean(touched && error)}
        helperText={error}
      />
    </>
  );
};

const StyledButton = styled(Button)`
  text-transform: none;
`;

const StyledDivier = styled(Divider)`
  color: rgba(0, 0, 0, 0.24);
`;

const SocialIcon = emotion.img`
  max-width: 30px;
  flex-grow: 1;
`;

const initialValues = { username: "", password: "" };

const SignIn: React.FC = () => {
  const handleSubmit = (values) => {
    alert(`Submit form: ${JSON.stringify(values)}`);
  };

  return (
    <div className="App">
      <Container
        maxWidth="sm"
        disableGutters
        sx={{ minHeight: "100vh", display: "flex" }}
      >
        <Paper
          elevation={5}
          sx={{ maxWidth: "400px", margin: "auto auto", borderRadius: ".5em" }}
        >
          <Box p={4}>
            <Box display="flex" justifyContent="space-evenly">
              <SocialIcon alt="facebook icon" src="icons/fb.png" />
              <SocialIcon alt="twitter icon" src="icons/tw.png" />
              <SocialIcon alt="google icon" src="icons/gg.png" />
            </Box>

            <Box my={3}>
              <StyledDivier light>OR</StyledDivier>
            </Box>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ setFieldValue }) => (
                <Form autoComplete="off">
                  <Box mb={2}>
                    <Field
                      fullWidth
                      hiddenLabel
                      margin="dense"
                      size="small"
                      label="Username"
                      name="username"
                      placeholder="Enter your e-mail"
                      component={CustomTextField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      validate={(value) =>
                        value && value.length < 5 && "name too short"
                      }
                    />
                  </Box>

                  <Box my={1}>
                    <Field
                      hiddenLabel
                      fullWidth
                      margin="dense"
                      size="small"
                      type="password"
                      label="Password"
                      name="password"
                      placeholder="Enter your password"
                      component={CustomTextField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        ),
                      }}
                      validate={(value) =>
                        value && value.length < 5 && "Password too short"
                      }
                    />
                  </Box>

                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me for a week"
                  />

                  <Box my={2}>
                    <StyledButton
                      fullWidth
                      type="submit"
                      color="primary"
                      variant="contained"
                    >
                      Log In
                    </StyledButton>
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" alignSelf="center">
                      Did you forgot your password?
                    </Typography>
                    <Link variant="caption" underline="always">
                      Reset Password
                    </Link>
                  </Box>

                  <Box mt={1.5}>
                    <StyledButton fullWidth>Create account</StyledButton>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default SignIn;
