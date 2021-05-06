import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [userName, setUsername] = React.useState("");
    return (
    <View style={styles.container}>
        <View>
            <Text style={{fontSize: 64}}>HAVEN</Text>
        </View>
        <View style={{marginTop: 100}}>
            <Text>Nombre de usuario: </Text>
            <TextInput style={{borderWidth: 1, width: 300}} onChangeText={setUsername} value={userName}/>
        </View>
        <View style={{marginTop: 100, width: 300}}>
            <Button onPress={() => navigation.navigate('Data')} title="Entrar"/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default RegisterScreen
