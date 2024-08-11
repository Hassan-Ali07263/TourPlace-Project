import React from 'react';
import { View, Text,StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack, Beach, Camp, Lake, Mountain } from '../../assets/svg';
import { useNavigation } from '@react-navigation/native';

const Categories=()=> {

  const navigation=useNavigation();

  const listing=[
    {id:1,name:"Mountains",icon:Mountain},
    {id:2,name:"Beach",icon:Beach},
    {id:3,name:"Lakes",icon:Lake},
    {id:4,name:"Camp",icon:Camp},
    {id:5,name:"Camp",icon:Camp},
    {id:6,name:"Mountains",icon:Mountain},
    {id:7,name:"Lakes",icon:Lake},
    {id:8,name:"Beach",icon:Beach},
    {id:9,name:"Mountains",icon:Mountain},
    {id:10,name:"Beach",icon:Beach},
    {id:11,name:"Lakes",icon:Lake},
    {id:12,name:"Camp",icon:Camp},
    {id:13,name:"Camp",icon:Camp},
    {id:14,name:"Mountains",icon:Mountain},
    {id:15,name:"Lakes",icon:Lake},
    {id:16,name:"Beach",icon:Beach},
    {id:17,name:"Lakes",icon:Lake},
    {id:18,name:"Camp",icon:Camp},
    {id:19,name:"Camp",icon:Camp},
    {id:20,name:"Mountains",icon:Mountain},
    {id:21,name:"Lakes",icon:Lake},
    {id:22,name:"Beach",icon:Beach},
    {id:23,name:"Mountains",icon:Mountain},
    {id:24,name:"Beach",icon:Beach},
    {id:25,name:"Lakes",icon:Lake},
    {id:26,name:"Camp",icon:Camp},
  ]
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"}/>

      <View style={styles.view1}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Categories</Text>
        </View>
      </View>

      <View style={styles.view3}>
        <FlatList
        data={listing}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.button1}>
              <item.icon/>
              <Text style={styles.text1}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={items => items.id}
        numColumns={4}
        />
      </View>

     </View>
  );
}

const styles=StyleSheet.create({
  view:{
    flex:1
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
    width: "60%"
  },
  button1:{
    height:75,
    width:75,
    backgroundColor:COLOR.white,
    shadowOpacity:1,
    shadowColor:COLOR.lightgrey,
    elevation:5,
    alignItems:"center",
    justifyContent:"space-evenly",
    borderRadius:10,
    margin:10
  },
  text1:{
    fontFamily:FONTS.medium,
    fontSize:12,
    color:COLOR.lightgrey
  }
})
export default Categories;