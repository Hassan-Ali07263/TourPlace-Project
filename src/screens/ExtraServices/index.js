import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { Assistant, BackBlack, Call, CurrencyConverter, CurrencyExchanger, Language, OfflineMap, Weather } from '../../assets/svg';

const ExtraServices = () => {
  const lists = [
    { id: 1, name: "Offline Maps", icon: OfflineMap },
    { id: 2, name: "Weather Forecast", icon: Weather },
    { id: 3, name: "Language Translator", icon: Language },
    { id: 4, name: "Exchange Currency", icon: CurrencyExchanger },
    { id: 5, name: "Currency Converter", icon: CurrencyConverter },
    { id: 6, name: "Emergency Contacts", icon: Call },
    { id: 7, name: "Emergency Assistant", icon: Assistant },
  ]
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />

      <View style={styles.view1}>
        <TouchableOpacity
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Extra Services</Text>
        </View>
      </View>

      <View>
        <FlatList
        data={lists}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.button1}>
            <item.icon/>
            <Text style={styles.text1}>{item.name}</Text>
          </TouchableOpacity>
          )
        }}
        keyExtractor={items=> items.id}
        numColumns={2}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal:5
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
  text1:{
    fontFamily:FONTS.semibold,
    fontSize:14,
    color:COLOR.textDark
  },
  button1:{
    height:145,
    width:"44%",
    backgroundColor:COLOR.white,
    borderRadius:20,
    justifyContent:"space-evenly",
    alignItems:"center",
    shadowOpacity:1,
    shadowColor:COLOR.lightgrey,
    elevation:5,
    margin:10
  }
})
export default ExtraServices;