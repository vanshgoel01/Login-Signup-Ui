

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();


  const handleSignup = async () => {
    if (!name || !email || !password || !mobile) {
      alert('Please fill all fields ');
      return;
    }

    const userData = { name, email, password, mobile };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      alert('Signup Successful');
      navigation.navigate('Login'); // navigate to login or home
    } catch (error) {
      console.log('Error saving user data', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Top Image */}
          <View style={styles.topImageContainer}>
            <Image
              source={require('../assets/topvector.png')}
              style={styles.topImage}
            />
          </View>

          <View style={styles.helloContainer}>
            <Text style={styles.helloText}>Create account</Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              onChangeText={setName}
              value={name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Fontisto name="locked" size={24} color="#9A9A9A" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign name="mail" size={24} color="#9A9A9A" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign name="mobile1" size={24} color="#9A9A9A" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Mobile"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={setMobile}
              value={mobile}
            />
          </View>

          {/* ✅ Signup Button */}
          <TouchableOpacity onPress={handleSignup}>
            <View style={styles.signInButtonContainer}>
              <Text style={styles.signtext}>Create</Text>
              <LinearGradient
                colors={['#F97794', '#623AA2']}
                style={styles.LinearGradient}>
                <AntDesign name="arrowright" size={24} color="white" />
              </LinearGradient>
            </View>
          </TouchableOpacity>

          <Text style={styles.create}>
            Or create account using social media
          </Text>

          <View style={styles.bottomButton}>
            <Entypo
              name="facebook-with-circle"
              size={24}
              color="blue"
              style={styles.socialIcon}
            />
            <Entypo
              name="twitter-with-circle"
              size={24}
              color="#55ACEE"
              style={styles.socialIcon}
            />
            <Entypo
              name="google--with-circle"
              size={24}
              color="rgba(248, 133, 133, 1)"
              style={styles.socialIcon}
            />
          </View>

          <View style={styles.leftVector}>
            <ImageBackground
              source={require('../assets/Vector.png')}
              style={styles.leftvectorImage}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    position: 'relative',
  },
  topImage: {
    height: 55,
    width: '50%',
  },
  helloContainer: {},
  helloText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: '#262626',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: 'center',
    height: 50,
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
  },
  signInButtonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '90%',
    justifyContent: 'flex-end',
  },
  signtext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#262626',
  },
  LinearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  create: {
    color: '#262626',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
  leftvectorImage: {
    height: 150,
    width: 100,
  },
  leftVector: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bottomButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    elevation: 10,
    margin: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 50,
  },
});
