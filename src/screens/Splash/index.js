import React, { useEffect } from 'react';
import { View,StyleSheet, StatusBar, Image } from 'react-native';
import { COLOR } from '../../enums/StyleFonts';
import { IMAGES } from '../../assets/images';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { vals } from '../Login';

const Splash=()=> {
  const navigation=useNavigation();

  useEffect(()=>{
    
    setTimeout(()=>{
      const value=vals.getString("val");
      console.log(value)
      if(value==="true")
      {
        navigation.navigate("BottomTabs")
      }
      else{
        navigation.navigate("Onboardings")
      }
    },3000)
  },[])
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.orange} barStyle={"light-content"}/>
      <Animatable.Image style={styles.img} duration={3000} animation='slideInDown' source={IMAGES.SplashLogo}/>
     </View>
  );
}


const styles=StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:COLOR.orange,
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:"80%",
    height:73
  }
})
export default Splash;