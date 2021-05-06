import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Images from '../assets/images';
import {
  LineChart,
} from "react-native-chart-kit";

const RegisterScreen = ({ navigation }) => {
    const [userName, setUsername] = React.useState("");
    return (
    <View style={styles.container}>
      <Image source={Images.havenLogo} style={{ minWidth: 100, minHeight: 100}} />
        <View style={{marginTop: 20}}>
            <Text style={{fontSize: 50, color: '#393b3a'}}>HAVEN</Text>
        </View>
        <View style={{marginTop: 70}}>
            <View>
            <Text>Nombre de usuario: </Text>
            </View>
            <View style={{marginTop: 10}}>
            <TextInput style={{borderWidth: 1, width: 300, borderColor: "#7f72fe", height: 35, paddingLeft: 10}} onChangeText={setUsername} value={userName}/>
            </View>
            
        </View>
        <View style={{marginTop: 30, width: 300}}>
            <Button color="#7f72fe" onPress={() => navigation.navigate('Data')} title="Entrar"/>
        </View>
        
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
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
