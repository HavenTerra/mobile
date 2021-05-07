import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { makeDeposit } from "../requests/index"
import {Context} from '../context/Store'


const DepositScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [depositAmount, setDepositAmount] = useState("")

  const deposit = async () => {
    await makeDeposit(state.username, depositAmount);
    navigation.navigate('Data');
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 0, justifyContent: "center"}}>
            <Text style={{fontSize: 18, color: '#393b3a', fontFamily: 'Inter_900Black'}}>Cuanto quieres depositar?</Text>
        </View>
        <View style={{marginTop: 70}}>
            <View style={{marginTop: 10}}>
            <TextInput style={{borderWidth: 1, width: 300, borderColor: "#7f72fe", height: 35, paddingLeft: 10, fontFamily: 'Inter_900Black'}} onChangeText={setDepositAmount} value={depositAmount}/>
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
