import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { makeDeposit } from "../requests/index"
import {Context} from '../context/Store'


const DepositScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [depositAmount, setDepositAmount] = useState("")

  const deposit = async () => {
    await makeDeposit(state.username, depositAmount);
    navigation.push('Data');
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 0, justifyContent: "left", width: 300, alignContent: 'flex-start'}}>
            <Text style={{fontSize: 14, color: '#393b3a', fontFamily: 'Inter_900Black', justifyContent: 'flex-start'}}>Depositar:</Text>
      </View>
      <View style={{marginTop: 20, marginBottom: 5,  justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: 300}}>
        <Text style={{textAlign: 'left'}}>{`Monto: `}</Text>
      </View>

        <View style={{marginTop: 0, backgroundColor: '#F4F9FE', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
            <View style={{marginTop: 0, flexDirection: 'row'}}>
            <TextInput style={{borderWidth: 0, width: 250, borderColor: "#F4F9FE", height: 35, paddingLeft: 10}} onChangeText={setDepositAmount} value={depositAmount}/>
            <View style={{backgroundColor: '#F4F9FE', width: 50, alignContent: 'center', justifyContent: 'center', borderRadius: 1}}>
              <Text>CLP</Text>
            </View>
            </View>
        </View>
    
      <View style={{borderWidth: 1, borderColor: '#E0E9F8', width: 300, borderRadius: 10, marginTop: 10}}>
        <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>Datos Bancarios:</Text>
          </View>
          <View style={{marginBottom: 5}}>
            <Text>Haven S.A</Text>
          </View>
          <View style={{marginBottom: 5}}>
            <Text>Cuenta Corriente - Banco Santander</Text>
          </View>
          <View style={{marginBottom: 5}}>
            <Text>Cuenta: 584930495</Text>
          </View>
          <View style={{marginBottom: 5}}>
            <Text>Rut: 11.111.111-1</Text>
          </View>
          <Text>Email: haven@terra.com</Text>
        </View>

      </View>
      <View style={{marginTop: 30, width: 300}}>
            <Button color="#7f72fe" onPress={deposit} title="Depositar"/>
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

export default DepositScreen
