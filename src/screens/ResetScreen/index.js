import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { IMAGES } from '../../assets/images';
import { BackBlack, Eye } from '../../assets/svg';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import { MMKV } from 'react-native-mmkv';
export const stored=new MMKV();


const ResetScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);

  const [passwordErr, setPasswordErr] = useState(false)
  const [confirmPassErr,setConfitmPassErr]=useState(false);

  const handelPassword = (text) => {
    setPassword(text)
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{6,}$/
    setPasswordErr(!strongPasswordRegex.test(text))
  }

  const handelConfirmPassword = (text) => {
    setConfirmPassword(text)
    const strongcnfrmPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{6,}$/
    setConfitmPassErr(!strongcnfrmPasswordRegex.test(text))
  }

  const PasswordReset = () => {
    if(confirmPassword!="" && password!="")
    {
      if(passwordErr===false && confirmPassErr===false)
      {
        if(password===confirmPassword)
        {
          stored.set("password",password)
          navigation.navigate("Login")
        }
        else if(password!=confirmPassword)
        {
          Alert.alert("Oops","password not matched")
        }
      }
    }
    else{
      Alert.alert("Oops","Looks like something is wrong")
    }
  }
  return (
    <ScrollView style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <View>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <TouchableOpacity onPress={() => navigation.goBack()}
              style={styles.button}>
              <BackBlack />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Reset</Text>
        </View>
        <Image style={styles.img} source={IMAGES.Reset} />

        <Text style={styles.text1}>Reset Your Password</Text>
        <Text style={styles.text2}>Now you can reset your old password</Text>


        <View style={styles.view3}>
          <Text style={styles.text3}>Enter a new password</Text>
          <View style={styles.view4}>
            <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"***************"} w={"90%"} val={password} visibility={visible} changedValue={(text) => handelPassword(text)} />
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Eye />
            </TouchableOpacity>
          </View>
          {
            passwordErr ? <Text style={styles.text8}>Enter correct and strong password</Text> : null
          }

          <Text style={styles.text3}>Confirm new password</Text>
          <View style={styles.view4}>
            <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"***************"} w={"90%"} val={confirmPassword} visibility={visible1} changedValue={(text) => handelConfirmPassword(text)} />
            <TouchableOpacity onPress={() => setVisible1(!visible1)}>
              <Eye />
            </TouchableOpacity>
          </View>
          {
            confirmPassErr ? <Text style={styles.text8}>Enter correct and strong password</Text> : null
          }

          <Buttons onClick={PasswordReset}
            title={"Submit"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"100%"} r={15} align={"center"} justify={"center"} mv={40} />

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  img: {
    height: 235,
    width: "100%",
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 20
  },
  text: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLOR.textDark,
    width: "50%"
  },
  view1: {
    flexDirection: "row",
    alignItems: "center"
  },
  view2: {
    width: "45%"
  },
  button: {
    padding: 10
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 24,
    color: COLOR.textDark,
    alignSelf: "center",
    marginTop: 20
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.textLight,
    alignSelf: "center",
    marginBottom: 20
  },
  text3: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.textDark,
    marginTop: 20,
    marginBottom: 5
  },
  view3: {
    marginHorizontal: 10
  },
  view4: {
    borderWidth: 1,
    borderColor: COLOR.bordorColor,
    borderRadius: 15,
    height: 48,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text8:{
    color:COLOR.orange,
    fontSize:10,
    fontFamily:FONTS.regular
},
})
export default ResetScreen;