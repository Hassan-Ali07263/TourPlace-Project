import React from 'react';
import {TextInput } from 'react-native';

const Input=({clr,kt,place,placeclr,refrence,val,at,changedValue,ml,w,visibility,h,r,bw,bc,ph})=> {
  return (
    <TextInput style={{color:clr,textAlign:at,width:w,height:h,borderRadius:r,borderWidth:bw,borderColor:bc,paddingHorizontal:ph}}
     secureTextEntry={visibility} 
     ref={refrence}
     keyboardType={kt}
     placeholder={place} 
     placeholderTextColor={placeclr} 
     value={val} 
     maxLength={ml}
     onChangeText={changedValue}/>
  );
}
export default Input;