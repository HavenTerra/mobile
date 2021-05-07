import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity } from 'react-native';
import { makeWithdrawal } from "../requests/index"
import {Context} from '../context/Store'


const DepositScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [withdrawAmount, setWithdrawAmount] = React.useState("");
  const [rut, setRut] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const deposit = async () => {
    await makeWithdrawal(state.username, withdrawAmount);
    navigation.push('Data');
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 0, width: 300, alignContent: 'flex-start'}}>
        <Text style={{fontSize: 14, color: '#393b3a', fontFamily: 'Inter_900Black', justifyContent: 'flex-start'}}>Retirar:</Text>
      </View>
      <View style={{marginTop: 20, marginBottom: 5,  justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: 300}}>
        <Text style={{textAlign: 'left'}}>{`Rut: `}</Text>
      </View>
      <View style={{marginTop: 0, backgroundColor: '#F4F9FE', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
            <View style={{marginTop: 0, flexDirection: 'row'}}>
              <TextInput style={{borderWidth: 0, width: 300, borderColor: "#F4F9FE", height: 35, paddingLeft: 10}} onChangeText={setRut} value={rut}/>
            </View>
      </View>
      <View style={{marginTop: 20, marginBottom: 5,  justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: 300}}>
        <Text style={{textAlign: 'left'}}>{`Banco: `}</Text>
      </View>
      <View style={{marginTop: 0, backgroundColor: '#F4F9FE', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
            <View style={{marginTop: 0, flexDirection: 'row'}}>
              <TextInput style={{borderWidth: 0, width: 300, borderColor: "#F4F9FE", height: 35, paddingLeft: 10}} onChangeText={setBank} value={bank}/>
            </View>
      </View>
      <View style={{marginTop: 20, marginBottom: 5,  justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: 300}}>
        <Text style={{textAlign: 'left'}}>{`Tipo Cuenta: `}</Text>
      </View>
      <View style={{marginTop: 0, backgroundColor: '#F4F9FE', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
            <View style={{marginTop: 0, flexDirection: 'row'}}>
              <TextInput style={{borderWidth: 0, width: 300, borderColor: "#F4F9FE", height: 35, paddingLeft: 10}} onChangeText={setAccount} value={account}/>
            </View>

      </View>
      <View style={{marginTop: 20, marginBottom: 5,  justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: 300}}>
        <Text style={{textAlign: 'left'}}>{`Número de cuenta: `}</Text>
      </View>
      <View style={{marginTop: 0, backgroundColor: '#F4F9FE', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
            <View style={{marginTop: 0, flexDirection: 'row'}}>
              <TextInput style={{borderWidth: 0, width: 300, borderColor: "#F4F9FE", height: 35, paddingLeft: 10}} onChangeText={setAccountNumber} value={accountNumber}/>
            </View>

      </View>
      <View style={{marginTop: 20, marginBottom: 5,  justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: 300}}>
        <Text style={{textAlign: 'left'}}>{`Monto: `}</Text>
      </View>
      <View style={{marginTop: 0, backgroundColor: '#F4F9FE', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
            <View style={{marginTop: 0, flexDirection: 'row'}}>
              <TextInput style={{borderWidth: 0, width: 250, borderColor: "#F4F9FE", height: 35, paddingLeft: 10}} onChangeText={setWithdrawAmount} value={withdrawAmount}/>
              <View style={{backgroundColor: '#F4F9FE', width: 50, alignContent: 'center', justifyContent: 'center', borderRadius: 1}}>
                <Text>CLP</Text>
              </View>
            </View>

      </View>
    <View style={{marginTop: 30, width: 300}}>
      <TouchableOpacity style={styles.button} onPress={deposit}>
           <Text style={{color: 'white'}}>Retirar</Text>
      </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "#5EA7FF",
    padding: 10,
    borderRadius:10,
    height: 40,
    justifyContent: "center"
  },
});

export default DepositScreen
