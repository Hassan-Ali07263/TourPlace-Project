import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image, Alert } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack } from '../../assets/svg';
import { IMAGES } from '../../assets/images';
import PhoneInput from 'react-native-phone-number-input';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';


const ForgetScreen = () => {
  const navigation=useNavigation();
  const [Phone, setPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState(false)

  const handelPhone = (text) => {
    setPhone(text)
    console.log("line 27.......")
    const phoneRegex = /^\+?(\d{1,4})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/
    console.log(phoneRegex.test(text))
    setPhoneErr(!phoneRegex.test(text))
  }

  const Forgeted=()=>{
    if(Phone!="")
    {
      if(phoneErr===false)
      {
        navigation.navigate("OtpScreen")
      }
    }
    else{
      Alert.alert("Oops","Please enter correct number")
    }
  }

  return (
    <ScrollView style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <View style={styles.view1}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
        style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Forgot</Text>
        </View>
      </View>

      <Image style={styles.img} source={IMAGES.Forget} />

      <Text style={styles.text1}>Forgot Password?</Text>
      <Text style={styles.text2}>Don’t worry! it happens. Please enter phone number associated with your account</Text>

      <View style={styles.view3}>
        <Text style={styles.text3}>Enter your mobile number</Text>
        <PhoneInput
          defaultValue={Phone}
          defaultCode='PK'
          layout="second"
          onChangeFormattedText={(text) => handelPhone(text)}
          containerStyle={styles.container}
          textInputStyle={styles.textInp}
          textContainerStyle={styles.textContainer}
          placeholder='1712345678'
          textInputProps={{ placeholderTextColor: COLOR.placeHolderColor }}
        />
      </View>
      {
        phoneErr ? <Text style={styles.text8}>Enter correct number</Text> : null
      }

      <Buttons onClick={Forgeted}
        title={"Send OTP Code"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"90%"} r={15} align={"center"} justify={"center"} mv={30} mh={20} />



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  text: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLOR.textDark
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15
  },
  view2: {
    width: "58%"
  },
  button: {
    padding: 10
  },
  img: {
    height: 280,
    width: "70%",
    alignSelf: "center",
    marginVertical: 10
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 24,
    color: COLOR.textDark,
    alignSelf: "center",
    marginVertical: 10,
    marginTop: 40
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.placeHolderColor,
    alignSelf: "center",
    marginHorizontal: 20,
    textAlign: "center",
  },
  text3: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.textDark
  },
  view3: {
    marginHorizontal: 20,
    marginTop: 50
  },
  container: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLOR.bordorColor,
    width: "100%",
    marginTop: 10,
  },
  textInp:
  {
    color: "black",
    height: 48,
    backgroundColor: "white"
  },
  textContainer: {
    height: 48,
    borderRadius: 15,
    backgroundColor: "white",
    color: "black"
  },
  text8: {
    color: COLOR.orange,
    fontSize: 10,
    fontFamily: FONTS.regular,
    marginHorizontal:20
  },
})
export default ForgetScreen;