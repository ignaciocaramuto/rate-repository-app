import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 14,
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
  },
});

const initialValues = {
  username: '',
  password: '',
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={{ padding: 15, backgroundColor: theme.colors.white }}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
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
