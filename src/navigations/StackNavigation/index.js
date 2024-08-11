import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../../enums/AppEnums';
import * as ui from "../../screens/index"
import BottomTabs from '../BottomTabs';
import DrawerNavigation from '../DrawerNavigation';

const StackNavigation=()=> {
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={SCREENS.SPLASH}>
            <Stack.Screen name={SCREENS.SPLASH} component={ui.Splash}/>
            <Stack.Screen name={SCREENS.ONBOARDINGS} component={ui.Onboardings}/>
            <Stack.Screen name={SCREENS.LOGIN} component={ui.Login}/>
            <Stack.Screen name={SCREENS.FORGETSCREEN} component={ui.ForgetScreen}/>
            <Stack.Screen name={SCREENS.OTPSCREEN} component={ui.OtpScreen}/>
            <Stack.Screen name={SCREENS.RESETSCREEN} component={ui.ResetScreen}/>
            <Stack.Screen name={SCREENS.SIGNUP} component={ui.SignUp}/>
            <Stack.Screen name={SCREENS.CONGRATULATIONS} component={ui.Congratulations}/>
            <Stack.Screen name={SCREENS.HOTELDETAILS} component={ui.HotelDetails}/>
            <Stack.Screen name={SCREENS.MOSTVISITED} component={ui.MostVisited}/>
            <Stack.Screen name={SCREENS.ROOMDETAIL} component={ui.RoomDetail}/>
            <Stack.Screen name={SCREENS.VISITERTIMER} component={ui.VisiterTimer}/>
            <Stack.Screen name={SCREENS.WORLDMOSTVISITED} component={ui.WorldMostVisited}/>
            <Stack.Screen name={SCREENS.PLACEDETAILS} component={ui.PlaceDetails}/>
            <Stack.Screen name={SCREENS.CATEGORIES} component={ui.Categories}/>
            <Stack.Screen name={SCREENS.CHATDETAILS} component={ui.ChatDetails}/>
            <Stack.Screen name={SCREENS.EXTRASERVICES} component={ui.ExtraServices}/>
            <Stack.Screen name={SCREENS.SERVICES} component={ui.Services}/>
            <Stack.Screen name={SCREENS.PROFILE} component={ui.Profile}/>
            <Stack.Screen name='BottomTabs' component={BottomTabs}/>
            <Stack.Screen name='DrawerNavigation' component={DrawerNavigation}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation;