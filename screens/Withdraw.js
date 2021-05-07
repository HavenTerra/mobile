import React, { useContext } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { makeWithdrawal } from "../requests/index"
import {Context} from '../context/Store'

const WithdrawScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [withdrawAmount, setWithdrawAmount] = React.useState("");

  const withdraw = async () => {
    await makeWithdrawal(state.username, withdrawAmount);
    navigation.navigate('Data');
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 0, justifyContent: "center"}}>
            <Text style={{fontSize: 18, color: '#393b3a', fontFamily: 'Inter_900Black'}}>Cuanto quieres retirar?</Text>
        </View>
        <View style={{marginTop: 70}}>
            <View style={{marginTop: 10}}>
            <TextInput style={{borderWidth: 1, width: 300, borderColor: "#febf72", height: 35, paddingLeft: 10, fontFamily: 'Inter_900Black'}} onChangeText={setWithdrawAmount} value={withdrawAmount}/>
            </View>
        </View>
    <View style={{marginTop: 30, width: 300}}>
            <Button color="#febf72" onPress={withdraw} title="Retirar"/>
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

export default WithdrawScreen
