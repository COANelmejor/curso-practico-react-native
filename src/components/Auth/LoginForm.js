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

export default function LoginForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false, // Evita que se valide al cambiar el valor, solo al enviar
    onSubmit: (values) => {
      console.log(JSON.stringify({values}, null, 2))
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
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
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
  error: {
    textAlign: 'center',
    color: '#FF0000',
    marginTop: 20,
  }
})
