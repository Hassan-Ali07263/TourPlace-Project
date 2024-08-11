import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SCREENS } from '../../enums/AppEnums';
import * as ui from "../../screens/index";
import { COLOR, FONTS } from '../../enums/StyleFonts';
import Foundation from "react-native-vector-icons/Foundation"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"

const BottomTabs=()=> {
    const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:COLOR.orange,tabBarInactiveTintColor:COLOR.lightgrey}}>
        <Tab.Screen options={{
            tabBarIcon:({color,size})=>(
                <Foundation name="home" size={size} color={color}/>
            ),
            tabBarLabel:"Home",
            tabBarLabelStyle:{fontFamily:FONTS.semibold,marginBottom:10},
            tabBarStyle:{height:60,alignItems:"center"}
        }}
        name={SCREENS.HOME} component={ui.Home}/>

        <Tab.Screen options={{
            tabBarIcon:({color,size})=>(
                <Feather name="bookmark" size={size} color={color}/>
            ),
            tabBarLabel:"Saved",
            tabBarLabelStyle:{fontFamily:FONTS.semibold,marginBottom:10},
            tabBarStyle:{height:60,alignItems:"center"}
        }}
        name={SCREENS.SAVED} component={ui.Saved}/>

        <Tab.Screen options={{
            tabBarIcon:({color,size})=>(
                <Feather name="bell" size={size} color={color}/>
            ),
            tabBarLabel:"Notification",
            tabBarLabelStyle:{fontFamily:FONTS.semibold,marginBottom:10},
            tabBarStyle:{height:60,alignItems:"center"}
        }}
        name={SCREENS.NOTIFICATION} component={ui.Notification}/>

        <Tab.Screen options={{
            tabBarIcon:({color,size})=>(
                <AntDesign name="message1" size={size} color={color}/>
            ),
            tabBarLabel:"Chat",
            tabBarLabelStyle:{fontFamily:FONTS.semibold,marginBottom:10},
            tabBarStyle:{height:60,alignItems:"center"}
        }}
        name={SCREENS.CHAT} component={ui.Chat}/>
    </Tab.Navigator>
  );
}
export default BottomTabs;