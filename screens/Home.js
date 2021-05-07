import React, { useEffect, useContext } from 'react';
import { StyleSheet, Button, Text, View, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { getUserInfo } from "../requests/index"
import {Context} from '../context/Store'
import {Actions} from '../context/Reducer'

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);

  let balance = 0

  if (state.user && state.user.balance){
    balance = state.user.balance
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
      <View style={{marginTop: 0, justifyContent: "center", marginBottom: 15}}>
          <Text style={{fontSize: 18, color: '#393b3a', fontFamily: 'Inter_900Black'}}>{`BALANCE: ${balance} CLP`}</Text>
      </View>
    <View>

  <LineChart
    data={{
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio"],
      datasets: [
        {
          data: [
            1 * 100,
            2 * 100,
            4 * 100,
            7 * 100,
            11 * 100,
            16 * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width * 0.8} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 2, // optional, defaults to 2dp
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

      <View style={{marginTop: 30, width: 300}}>
            <Button color="#7f72fe" onPress={() => navigation.navigate('Deposit')} title="Depositar"/>
      </View>
      <View style={{marginTop: 30, width: 300}}>
            <Button color="#febf72" onPress={() => navigation.navigate('Withdraw')} title="Retirar"/>
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

export default HomeScreen
