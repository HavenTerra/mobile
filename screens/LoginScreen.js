import React, { useContext } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Images from '../assets/images';
import {createUser} from '../requests';
import {Context} from '../context/Store'
import {Actions} from '../context/Reducer'

const RegisterScreen = ({ navigation }) => {
    const [userName, setUsername] = React.useState("");
    const [state, dispatch] = useContext(Context);

    const register = async () => {
      try{
        const createUserResponse = await createUser(userName)
        console.log({createUserResponse})
        dispatch({type: Actions.CREATE_USER, payload: userName})
        navigation.push('Data')
      }
      catch{
        setUsername("")
      }
    }

    return (
    <View style={styles.container}>
      
      
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50}}>
            <Image source={Images.havenLogo} style={{ minWidth: 80, minHeight: 80}} />
            <Text style={{fontSize: 35, color: '#393b3a', fontWeight: '500'}}>Haven</Text>
        </View>
        <View style={{alignContent: 'center', justifyContent: 'center'}}>
          <View>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            ¡La 
            <Text style={{color: '#7A52ED', fontWeight: 'bold'}}>
              {` mejor `}
            </Text>
            cuenta de ahorros de Chile!
          </Text>
          </View>
      <View>

      <Text style={{textAlign: 'center', marginTop: 5}}>
            !Ahorra para tener un mejor futuro!
          </Text>
      </View>

        </View>
        <View style={{marginTop: 50}}>
        <View>
            <Text style={{ fontSize: 12, color: '#393b3a', paddingTop: 10, paddingLeft: 10, fontWeight: '300'}}>Nombre de usuario: </Text>
            </View>
        <View style={{marginTop: 5, backgroundColor: '#F4F9FE', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
            <View style={{marginTop: 0}}>
              <TextInput style={{fontSize: 12,  borderWidth: 0, width: 300, height: 35, paddingLeft: 10,  underlineColor: 'transparent'}} onChangeText={setUsername} value={userName}/>
            </View>
        </View>
        </View>
        <View style={{marginTop: 10, width: 300}}>
            <TouchableOpacity style={styles.button} color="#7f72fe" onPress={register} title="Entrar">
              <View>
                <Text style={{color: 'white', fontWeight: 600}}>INGRESAR</Text>
              </View>
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

export default RegisterScreen
