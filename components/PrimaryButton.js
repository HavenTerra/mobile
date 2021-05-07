import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PrimaryButton = () => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#48F10E", "#078716", "#093203"]}
          style={styles.buttonContainer}
          start={{x: 0}}
          end={{x: 100}}
        >
          <Text
            style={styles.buttonText}
          >
            Login to read
          </Text>
        </LinearGradient>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: { 
      padding: 15, 
      alignItems: "center", 
      borderRadius: 5 
    },
    buttonText: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#fff",
    }
  });

  export default PrimaryButton;