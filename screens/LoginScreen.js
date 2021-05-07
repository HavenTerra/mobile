import React, { useContext } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Image } from 'react-native';
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
        navigation.navigate('Data')
      }
      catch{
        setUsername("")
      }
    }

    return (
    <View style={styles.container}>
      
      <Image source={Images.havenLogo} style={{ minWidth: 100, minHeight: 100}} />
        <View style={{marginTop: 20}}>
            <Text style={{ fontFamily: 'Inter_900Black',  fontSize: 50, color: '#393b3a'}}>Haven</Text>
        </View>
        <View style={{marginTop: 70}}>
            <View>
            <Text style={{ fontFamily: 'Inter_900Black',  fontSize: 14, color: '#393b3a'}}>Nombre de usuario: </Text>
            </View>
            <View style={{marginTop: 10}}>
            <TextInput style={{fontFamily: 'Inter_900Black',  borderWidth: 1, width: 300, borderColor: "#7f72fe", height: 35, paddingLeft: 10}} onChangeText={setUsername} value={userName}/>
            </View>
            
        </View>
        <View style={{marginTop: 30, width: 300}}>
            <Button color="#7f72fe" onPress={register} title="Entrar"/>
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

export default RegisterScreen
