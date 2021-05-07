import React, { useEffect, useContext } from 'react';
import { StyleSheet, Button, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { getUserInfo } from "../requests/index"
import {Context} from '../context/Store'
import {Actions} from '../context/Reducer'

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);

  let balance = 0
  let earnings = [0, 0, 0, 0, 0, 0]

  if (state.user && state.user.balance){
    balance = state.user.balance
  }

  if (state.user && state.user.earnings){
    earnings = state.user.earnings
    const zero = Math.floor( earnings[0]/1000 );
    const one = Math.floor( earnings[1]/1000 );
    const two = Math.floor( earnings[2]/1000 );
    const three = Math.floor( earnings[3]/1000 );
    const four = Math.floor( earnings[4]/1000 );
    const five = Math.floor( earnings[5]/1000 );

    earnings = [zero, one, two, three, four, five]
    console.log(earnings)
  }

  const getUser = async () => {
    const getUserInfoResponse = await getUserInfo(state.username)
    const {data} = getUserInfoResponse
    dispatch({type: Actions.GET_USER_INFO, payload: data.data})
  }

  useEffect(() => {
      getUser()      
    }, []);


  return (
    <View style={styles.container}>
            <View style={{marginTop: 0, width: 300, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: '#393b3a', fontFamily: 'Inter_900Black', justifyContent: 'center'}}>Balance</Text>
      </View>
      <View style={{borderWidth: 1, borderColor: '#E0E9F8', width: 300, borderRadius: 10, marginTop: 10}}>
        <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>Información:</Text>
          </View>
          <View style={{marginBottom: 5}}>
          <Text style={{fontSize: 14, color: '#393b3a'}}>{`Balance: ${balance} CLP`}</Text>
          </View>
          <View style={{marginBottom: 5}}>
          <Text style={{fontSize: 14, color: '#393b3a'}}>{`Ganancia diaria: ${Math.round(balance*0.2/365)} CLP`}</Text>
          </View>
          <View style={{marginBottom: 5}}>
          <Text style={{fontSize: 14, color: '#393b3a'}}>{`Ganancia mensual: ${Math.round(balance*0.2/12)} CLP`}</Text>
          </View>
        </View>
        <View>
  <View style={{paddingHorizontal: 15}}>
    <Text >Proyecciones</Text>
  </View>
  <LineChart
    data={{
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio"],
      datasets: [
        {
          data: earnings
        }
      ]
    }}
    width={Dimensions.get("window").width * 0.7} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(127,114,254, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(127,114,254, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      </View>


      <View style={{marginTop: 30, width: 300}}>
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.push('Deposit')}>
           <Text style={{color: 'white'}}>Depositar</Text>
      </TouchableOpacity>
    </View>
    <View style={{marginTop: 30, width: 300}}>
      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.push('Withdraw')}>
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
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#5EA7FF",
    padding: 10,
    borderRadius:10,
    height: 40,
    justifyContent: "center"
  },
  secondaryButton: {
    alignItems: "center",
    backgroundColor: "#7A52ED",
    padding: 10,
    borderRadius:10,
    height: 40,
    justifyContent: "center"
  },
});

export default HomeScreen
