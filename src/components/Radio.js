import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { COLOR } from '../enums/StyleFonts';

const Radio=({onClick,checks})=> {
  return (
    <TouchableOpacity onPress={onClick}
    style={{height:12,width:12,justifyContent:"center",alignItems:"center",
        borderRadius:15,backgroundColor:COLOR.lightgrey
    }}>
        {
            checks ? <View style={{height:12,width:12,
                borderRadius:15,backgroundColor:COLOR.orange
            }}></View>:null
        }

    </TouchableOpacity>
  );
}
export default Radio;