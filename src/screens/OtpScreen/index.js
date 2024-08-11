import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack } from '../../assets/svg';
import { IMAGES } from '../../assets/images';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import { stored } from '../SignUp';

const OtpScreen = () => {

  const navigation=useNavigation();

  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();

  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');

  const [count,setCount]=useState(60)

  const [number,setNumber]=useState('');

  useEffect(()=>{
    const num=stored.getString("number")
    setNumber(num);
  },[])

  useEffect(()=>{
    const interval=setInterval(()=>{
      if(count === 0)
      {
        clearInterval(interval)
      }
      else
      {
        setCount(count - 1);
      }
    },1000);
    return ()=>{
      clearInterval(interval)
    }
  },[count])

  const Resending=()=>{
    setCount(60)
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
          <Text style={styles.text}>Verify</Text>
        </View>
      </View>

      <View>
        <Image style={styles.img} source={IMAGES.Otps} />
      </View>

      <Text style={styles.text1}>Enter OTP</Text>
      <Text style={styles.text2}>An 4 digit OTP has been sent to</Text>
      <Text style={styles.text3}>{number}</Text>

      <View style={styles.view3}>
        <Input refrence={inp1} kt={"number-pad"} clr={COLOR.black} at={"center"} w={56} h={52} r={10} bw={1} ml={1} bc={COLOR.bordorColor} val={val1} changedValue={(text) => {
          setVal1(text)
          if (text.length >= 1) {
            inp2.current.focus();
          }
          else if (text.length < 1) {
            inp1.current.focus();
          }
        }} />
        <Input refrence={inp2} kt={"number-pad"} clr={COLOR.black} at={"center"} w={56} h={52} r={10} bw={1} ml={1} bc={COLOR.bordorColor} val={val2} changedValue={(text) => {
          setVal2(text)
          if (text.length >= 1) {
            inp3.current.focus();
          }
          else if (text.length < 1) {
            inp1.current.focus();
          }

        }} />
        <Input refrence={inp3} kt={"number-pad"} clr={COLOR.black} at={"center"} w={56} h={52} r={10} bw={1} ml={1} bc={COLOR.bordorColor} val={val3} changedValue={(text) => {
          setVal3(text)
          if (text.length >= 1) {
            inp4.current.focus();
          }
          else if (text.length < 1) {
            inp2.current.focus();
          }
        }} />
        <Input refrence={inp4} kt={"number-pad"} clr={COLOR.black} at={"center"} w={56} h={52} r={10} bw={1} ml={1} bc={COLOR.bordorColor} val={val4} changedValue={(text) => {
          setVal4(text)
          if (text.length >= 1) {
            inp4.current.focus();
          }
          else if (text.length < 1) {
            inp3.current.focus();
          }
        }} />

      </View>

      <Buttons setting={val1 != "" && val2 != "" && val3 != "" && val4 != "" ? false:true}
       onClick={()=>navigation.navigate("Login")} title={"Verify"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} r={15} align={"center"} justify={"center"} mv={20} mh={20} />

      <View style={styles.view4}>
        <TouchableOpacity onPress={Resending}
        disabled={count === 0 ? false:true}
        >
        <Text style={styles.text4}>Resend OTP </Text>
        </TouchableOpacity>
        {
        count != 0 ? <Text style={styles.text5}>(00:{count})</Text> : null
        }
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.white,
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
    width: 260,
    height: 260,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 24,
    color: COLOR.textDark,
    alignSelf: "center",
    marginVertical: 10
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.placeHolderColor,
    alignSelf: "center"
  },
  text3: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark,
    alignSelf: "center",
    marginBottom: 20
  },
  view3: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-evenly"
  },
  text4:{
    fontFamily:FONTS.semibold,
    fontSize:16,
    color:COLOR.textLight
  },
  text5:{
    fontFamily:FONTS.semibold,
    fontSize:16,
    color:COLOR.lightgrey
  },
  view4:{
    flexDirection:"row",
    alignSelf:"center"
  }
})
export default OtpScreen;