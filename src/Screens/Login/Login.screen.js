import React, { useEffect, useState } from 'react'
import { Alert, Keyboard, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import Button from '../../Components/Button/Button.component'
import Input from '../../Components/TextInput/TextInput.component'
import styles from './Login.styles';
import commonStyles from '../../Commons/common.styles';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const login = () => {
    Keyboard.dismiss()
    setLoading(true)
    if(password && email){
      auth().createUserWithEmailAndPassword(email, password)
        .then(() => { })
        .catch(error => {
          setLoading(false)
          if (error.code === 'auth/email-already-in-use') {
            setLoading(true)
            auth().signInWithEmailAndPassword(email, password)
              .then((data) => { })
              .catch(error => {
                Alert.alert('Error', "Invalid Password")
              })
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Error', 'Please enter a valid email')
          }
        })
    }else{
      setLoading(false)
      Alert.alert('Error', 'Please fill all the mandatory fields.')
    }
  }


  return (
    <>
      {
        loading ?
          <View style={[styles.loader]}>
          </View>
          :
          <></>
      }

      <View style={[styles.screenContainer]}>
      <View style={{width: '40%', position: 'absolute', height: '150%', top: 0, zIndex: 0, bottom: 0, backgroundColor: '#F2F2F2'}}/>
        <View style={[styles.AppTitleContainer]}>
          <Text style={[styles.AppTitle]}>Film-Ku</Text>
        </View>
        <View>
          <Input value={email} onChangeText={setEmail} label='Email' placeholder={"test@xyz.com"} />
          <Input value={password} onChangeText={setPassword} label='Password' placeholder={"xxxxxxx"} password />
          <Button action={login} label={'Submit'} />
        </View>
      </View>
    </>
  )
}

export default Login