import { StyleSheet, Text, View,Image,TextInput,ImageBackground, TouchableOpacity,KeyboardAvoidingView,ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Alert } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = () => {
   const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation =useNavigation();
  const handleRegister =()=>{
  navigation.navigate("Signup")
  }
  const handleLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');

      if (storedData) {
        const user = JSON.parse(storedData);

       
        if (name === user.name && password === user.password) {
          Alert.alert('Login Successful', `Welcome ${user.name}!`);
         
        } else {
          Alert.alert('Invalid Credentials', 'Username or password is incorrect');
        }
      } else {
        Alert.alert('No user found', 'Please sign up first');
      }
    } catch (error) {
      console.log('Error reading AsyncStorage', error);
    }
  };

  return (
     <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
     <View style={styles.topImageContainer}>
      <Image 
      source={require("../assets/topvector.png")}
      style={styles.topImage}/>
     </View>
     <View style={styles.helloContiner}>
      <Text style={styles.helloText}> 
        Hello
      </Text>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
<FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon}/>
<TextInput style={styles.textInput} placeholder='Username'
value={name}
    onChangeText={setName}/>
      </View>
<View style={styles.inputContainer}>
<Fontisto name="locked" size={24} color="#9A9A9A" style={styles.inputIcon}/>
<TextInput style={styles.textInput} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}/>
      </View>
     <Text style={styles.forgetText}>Forget your password?</Text>
 <TouchableOpacity onPress={handleLogin}>
  <View style={styles.signInButtonContainer}>
<Text style={styles.signtext}>Sign in</Text>
<LinearGradient
  colors={['#F97794', '#623AA2']}
  style={styles.LinearGradient}
>
  <AntDesign name="arrowright" size={24} color="white" />
</LinearGradient>

  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={handleRegister}>
  <Text style={styles.create}>Don't have an account?{""}
    <Text style={{textDecorationLine:"underline"}}> Create</Text>
    </Text>
    </TouchableOpacity>
    <View style={styles.leftVector}>
      <ImageBackground source={require("../assets/Vector.png")} style={styles.leftvectorImage}/>
    </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F5F5F5",
    flex:1,
    position:"relative"
  },
  topImageContainer:{

  },
topImage:{
  height:130,
  width:"100%"
},
helloContiner:{

},
helloText:{
textAlign:'center',
fontSize:70,
fontWeight:500,
color:"#262626"
},
signInContainer:{
alignItems:"center"
},
signInText:{
  textAlign:"center",
  fontSize:18,
  color:"#262626",
  marginBottom:30
},
inputContainer:{
  backgroundColor:"#FFFFFF",
  flexDirection:'row',
  borderRadius:20,
  marginHorizontal:40,
  elevation:10,
  marginVertical:20,
alignItems:"center",
height:50
},
inputIcon:{
marginLeft:15,
marginRight:5
},
textInput:{
  flex:1
},
forgetText:{
  color:"#BEBEBE",
  textAlign:"right",
  width:"90%",
  fontSize:15
},
signInButtonContainer:{
flexDirection:"row",
marginTop:120,
width:"90%",
justifyContent:"flex-end"
},
signInText:{
  fontSize: 18,
  fontWeight:"bold",
  color:"#262626"
},
signtext:{
 fontSize: 25,
  fontWeight:"bold",
  color:"#262626"
},
LinearGradient:{
  height:34,
  width:56,
  borderRadius:17,
  alignItems:"center",
  justifyContent:"center",
  marginHorizontal:10
},
create:{
  color:"#2626262",
  textAlign:"center",
  fontSize:18,
  marginTop:50
},
leftvectorImage:{
height:150,
width:100
},
leftVector:{
  position:"absolute",
  bottom:0,
  left:0
}
}
)