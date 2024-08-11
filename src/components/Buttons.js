import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Buttons=({bgclr,h,w,title,clr,ff,size,r,align,justify,mv,onClick,mh,setting})=> {
  return (
    <TouchableOpacity onPress={onClick}
    disabled={setting}
     style={{backgroundColor:bgclr,marginHorizontal:mh,height:h,width:w,borderRadius:r,alignItems:align,justifyContent:justify,marginVertical:mv}}>
        <Text style={{color:clr,fontFamily:ff,fontSize:size}}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Buttons;