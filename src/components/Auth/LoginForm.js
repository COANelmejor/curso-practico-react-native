import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user } from '../../utils/userDB';

export default function LoginForm() {
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false, // Evita que se valide al cambiar el valor, solo al enviar
    onSubmit: (values) => {
      const {
        username,
        password,
      } = values;

      if (user.username !== username || user.password !== password) {
        setError('Usuario o Contraseña incorrectos');
        // alert('Usuario o Contraseña incorrectos');
      } else {
        Keyboard.dismiss();
        alert('Bienvenido');
      }
    },
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder='Usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button
        title='Iniciar Sesión'
        onPress={formik.handleSubmit}
        style={styles.loginButton}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues() {
  return {
    username: '',
    password: '',
  }
}

function validationSchema() {
  return {
    username: Yup.string().required('El Usuario es obligatorio'),
    password: Yup.string().required('La Contraseña es obligatoria')
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  loginButton: {
    marginTop: 50,
    backgroundColor: '#000000',
  },
  error: {
    textAlign: 'center',
    color: '#FF0000',
    marginTop: 20,
  }
})
