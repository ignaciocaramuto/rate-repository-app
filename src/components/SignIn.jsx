import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    borderColor: theme.colors.textSecondary
  },
  button: {
    height: 50,
    marginBottom: 14,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    backgroundColor: theme.backgrounds.button,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: theme.backgrounds.button
  }
});

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .default(undefined)
    .required('Username is required'),
  password: yup
    .string()
    .default(undefined)
    .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={{ padding: 15, backgroundColor: theme.colors.white }}>
      <TextInput
        style={[
          styles.input,
          formik.touched.username && formik.errors.username && {
            borderColor: theme.colors.error,
            borderWidth: 1
          }
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.error, marginBottom: 12 }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.username && formik.errors.username && {
            borderColor: theme.colors.error,
            borderWidth: 1
          }
        ]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error, marginBottom: 12 }}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="white" textAlign="center" fontWeight="bold">Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
