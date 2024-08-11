import React from 'react';
import { View, Text,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ExtraServices } from '../../screens';
const CustonDrawer =(props)=>{
  const navigation=useNavigation();

  return(
    <DrawerContentScrollView style={{flex:1,marginHorizontal:10}}>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
      <Text style={{color:'black',fontSize:20,alignSelf:'center',marginVertical:20}}>Customized Draw</Text>
      </View>
      
      <TouchableOpacity style={{borderRadius:5,borderWidth:1,padding:10,marginVertical:10}}>
        <Text style={{color:'black',fontSize:17}}>Survey</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{borderRadius:5,borderWidth:1,padding:10,marginVertical:10}}>
        <Text style={{color:'black',fontSize:17}}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:5,borderWidth:1,padding:10,marginVertical:10}}>
        <Text style={{color:'black',fontSize:17}}>Loop</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius:5,borderWidth:1,padding:10,marginVertical:10}}>
        <Text style={{color:'black',fontSize:17}}>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.closeDrawer()}
      style={{borderRadius:5,borderWidth:1,padding:10,marginVertical:10}}>
        <Text style={{color:'black',fontSize:17}}>Close Drawer</Text>
      </TouchableOpacity>

      {/* <DrawerItem 
      label='Loop'
      onPress={()=>navigation.navigate('Loop')}
      activeTintColor='red'
      inactiveTintColor='blue'
      /> */}

    </DrawerContentScrollView>
  );
}

const DrawerNavigation=()=> {
    const Drawer=createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName='Survey' drawerContent={(props) => <CustonDrawer {...props}/>}
    screenOptions={{
      headerShown:false
    }}
    >
        <Drawer.Screen name='ExtraServices' component={ExtraServices}/>
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;








// import { createDrawerNavigator } from '@react-navigation/drawer';
// import React from 'react';
// import CustomDrawer from './CustomDrawer';
// import { ExtraServices, Services } from '../../screens';

// const DrawerNavigation = () => {
//     const Drawer = createDrawerNavigator();
//     return (
//         <Drawer.Navigator drawerContent={(props)=><CustomDrawer {...props}/>}>
//             <Drawer.Screen name='ExtraServices' component={ExtraServices}/>
//             <Drawer.Screen name='Services' component={Services}/>
//         </Drawer.Navigator>
//     );
// }
// export default DrawerNavigation;

