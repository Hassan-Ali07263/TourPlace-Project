import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import { BackBlack, Emoji, Links, Sending } from '../../assets/svg';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

const ChatDetails = () => {
  const [msg,setMsg]=useState('');

  const navigation=useNavigation();
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"}/>

      <View style={styles.view1}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Ishtiaq Zaman</Text>
        </View>
      </View>

      <View style={styles.view3}>
        {/* Add messages list here */}
      </View>

      <View style={styles.view6}>
        <TouchableOpacity style={styles.view4}><Links/></TouchableOpacity>
        <TouchableOpacity style={styles.view4}><Emoji/></TouchableOpacity>
        <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"Enter your text here..."} w={"75%"} val={msg} changedValue={(text) => setMsg(text)} />
        <TouchableOpacity style={styles.view5}><Sending/></TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  button: {
    padding: 10,
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
    marginVertical: 10
  },
  view2: {
    width: "65%"
  },
  view3:{
    flex:1
  },
  view6:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:15,
    backgroundColor:COLOR.white,
    paddingHorizontal:10
  },
  view4:{
    marginHorizontal:5
  },
  view5:{
    backgroundColor:COLOR.orange,
    height:28,
    width:28,
    borderRadius:28,
    alignItems:"center",
    justifyContent:"center"
  }
})
export default ChatDetails;