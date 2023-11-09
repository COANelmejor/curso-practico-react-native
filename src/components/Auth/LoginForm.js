import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder='Usuario'
        style={styles.input}
        autoCapitalize='none'
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button
        title='Iniciar Sesión'
        onPress={() => console.log('Iniciar Sesión')}
      />
    </View>
  )
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
  }
})
