import { Box, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";

export const UserForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        border: 1,
        borderColor: "#1976d2",
        borderRadius: 2,
        width: "50%",
        mr: 4,
        ml: 8,
        padding: 4,
      }}
    >
      <Formik>
        <Form>
          <Box sx={{ margin: 1 }}>
            <Field
              component={TextField}
              label="Username"
              size="small"
              type="text"
              name="name"
              fullWidth
            />
          </Box>
          <Box sx={{ margin: 1 }}>
            <Field
              component={TextField}
              label="Email"
              size="small"
              name="email"
              type="text"
              fullWidth
            />
          </Box>
          <Box sx={{ margin: 1 }}>
            <Field
              component={TextField}
              type="tel"
              label="Phone"
              name="number"
              size="small"
              fullWidth
            />
          </Box>
          <Box sx={{ margin: 1 }}>
            <Field
              component={TextField}
              label="Address"
              size="small"
              type="text"
              name="name"
              fullWidth
            />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
