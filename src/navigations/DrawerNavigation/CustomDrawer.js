import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CustomDrawer=(props)=> {
  return (
        <DrawerContentScrollView {...props}>
            <View>
                <TouchableOpacity>
                    <Text>kdasfakf</Text>
                </TouchableOpacity>
            </View>
        <DrawerItemList {...props}></DrawerItemList>
        </DrawerContentScrollView>
  );
}


const styles=StyleSheet.create({
    view:{
        flex:1
    }
})
export default CustomDrawer;