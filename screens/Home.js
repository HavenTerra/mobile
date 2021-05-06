import React, { useState } from 'react';
import { StyleSheet, Button, Alert, Modal, Text, View } from 'react-native';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balance</Text>
      <View ><Text style={styles.title}>2000000</Text></View>
      <Text>Ganancia Diaria: 20</Text>
      <Text>Ganancia Diaria: 20</Text>
      <Text>Ganancia Diaria: 20</Text>
      <Text>Rentabilidad: 20% </Text>
      <Button
        title="Depositar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Retirar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Modal
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
      </Modal>
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

export default HomeScreen
