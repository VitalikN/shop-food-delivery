import { Box, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
// import { useState } from 'react';

// import * as Yup from 'yup';
import 'yup-phone-lite';

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Must be a valid email').required('Enter email'),

//   phone: Yup.string()
//     .min(10, 'Too Short!')
//     .max(15, 'Too Long!')
//     .required('Required'),
//   address: Yup.string().required('Enter your shipping address'),
// });

// const SubmitSchema = Yup.object().shape({

//   name: Yup.string().required('Enter the name of the customer'),
//   email: Yup.string().email().required('Enter email'),
//   phone: Yup.string().phone('UA').required('Enter phone number'),
//   address: Yup.string().required('Enter your shipping address'),
// });

export const UserForm = () => {
  // const [userData, setUserData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  // });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        border: 1,
        borderColor: '#1976d2',
        borderRadius: 2,
        width: '50%',
        mr: 4,
        ml: 8,
        padding: 4,
      }}
    >
      <Formik>
        {/* initialValues=
        {{
          name: '',
          email: '',
          phone: '',
          address: '',
        }} */}
        {/* onSubmit={(values, { resetForm }) => {}} */}
        {/* validationSchema={validationSchema} */}
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
              name="phone"
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
