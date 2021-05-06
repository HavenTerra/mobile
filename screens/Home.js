import React, { useState } from 'react';
import { StyleSheet, Button, Alert, Modal, Text, View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{marginTop: 0, justifyContent: "center"}}>
            <Text style={{fontSize: 18, color: '#393b3a'}}>BALANCE</Text>
        </View>
        <View style={{marginTop: 20, justifyContent: "center", marginBottom: 15}}>
            <Text style={{fontSize: 30, color: '#393b3a'}}>20000000 CLP</Text>
        </View>
        {/* <View style={{marginTop: 20, justifyContent: "center"}}>
      <Text>Ganancia Diaria: 11000 CLP</Text>
      </View>
      <View style={{marginTop: 20, justifyContent: "center"}}>
      <Text>Ganancia Mensual: 300000 CLP</Text>
        </View>
        <View style={{marginTop: 20, justifyContent: "center", marginBottom: 20}}>
        <Text>Ganancia Anual: 4000000 CLP</Text>
        </View> */}
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
            <Button color="#7f72fe" onPress={() => navigation.navigate('Data')} title="Depositar"/>
      </View>
      <View style={{marginTop: 30, width: 300}}>
            <Button color="#febf72" onPress={() => navigation.navigate('Data')} title="Retirar"/>
      </View>
      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View>
            <Text>Hello World!</Text>
            <Button onPress={() => setModalVisible(!modalVisible)} title="Hola"/>
          </View>
        </View>
      </Modal> */}
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
