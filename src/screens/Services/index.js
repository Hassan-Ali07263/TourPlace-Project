import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native';
import { BackBlack, Boat, Bus, Hotel, Mapgrey, MapOrange, PencilOrange, Plane, Sort, StarOrange } from '../../assets/svg';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { IMAGES } from '../../assets/images';
import Ionicons from "react-native-vector-icons/Ionicons";
import Buttons from '../../components/Buttons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign"
import Input from '../../components/Input';

const HotelList = [
  {
    id: 1,
    name: "Holy Park Hotel",
    rating: 4.8,
    address: "Cox’s Bazar",
    price: "$50",
    image: IMAGES.HOLYPARK
  },
  {
    id: 2,
    name: "Dream Valley",
    rating: 4.5,
    address: "Cox’s Bazar",
    price: "$60",
    image: IMAGES.DREAMVALLY
  },
  {
    id: 3,
    name: "Esha Hotel",
    rating: 4.6,
    address: "Cox’s Bazar",
    price: "$75",
    image: IMAGES.ESHAHOTEL
  },
  {
    id: 4,
    name: "Hotel Niribili",
    rating: 4.4,
    address: "Cox’s Bazar",
    price: "$85",
    image: IMAGES.HOTELNIRIBILI
  },
  {
    id: 5,
    name: "Luxury Hotel",
    rating: 4.9,
    address: "Cox’s Bazar",
    price: "$90",
    image: IMAGES.LUXURYHOTEL
  },
  {
    id: 6,
    name: "Holy Park Hotel",
    rating: 4.8,
    address: "Cox’s Bazar",
    price: "$50",
    image: IMAGES.HOLYPARK
  },
  {
    id: 7,
    name: "Holy Park Hotel",
    rating: 4.8,
    address: "Cox’s Bazar",
    price: "$50",
    image: IMAGES.HOLYPARK
  },
  {
    id: 8,
    name: "Holy Park Hotel",
    rating: 4.8,
    address: "Cox’s Bazar",
    price: "$50",
    image: IMAGES.HOLYPARK
  },
]

const Services = () => {

  const navigation=useNavigation();

  const [seach,setSearch]=useState('');
  const [filters,setFilters]=useState(HotelList)

  const filterFun=(text)=>
  {
    setSearch(text);
    const filtering=HotelList.filter(item => item?.name?.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    setFilters(filtering)
  }

  const comps=[
    {id:1,name:"Hotel",icon:Hotel},
    {id:2,name:"Flight",icon:Plane},
    {id:3,name:"Bus",icon:Bus},
    {id:4,name:"Boat",icon:Boat},
  ]
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <View style={styles.view1}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Services</Text>
        </View>
      </View>

      <View>
        <FlatList 
        data={comps}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.button2}>
              <item.icon />
              <Text style={styles.text10}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
        />
      </View>


      <View style={styles.view6}>
        <AntDesign name="search1" color={COLOR.lightgrey} size={25}/>
        <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"Search any hostels..."} w={"90%"} val={seach} changedValue={(text) => filterFun(text)} />

      </View>

      <View style={styles.view11}>
        <FlatList
          data={filters}
          renderItem={({ item }) => {
            return (
              <View style={styles.view7}>
                <Image style={styles.img} source={item.image} />
                <View style={styles.view9}>
                  <View style={styles.view8}>
                    <Text style={styles.text6}>{item.name}</Text>
                    <TouchableOpacity>
                      <Ionicons name="bookmark" color={COLOR.orange} size={20} />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.view10}>
                    <StarOrange />
                    <Text style={styles.text7}>{item.rating}</Text>
                  </View>

                  <View style={styles.view10}>
                    <Mapgrey />
                    <Text style={styles.text8}>{item.address}</Text>
                  </View>

                  <View style={styles.view8}>
                    <View style={styles.view10}>
                      <Text style={styles.text9}>{item.price}</Text>
                      <Text style={styles.text8}>/Room/Night</Text>
                    </View>
                    <Buttons title={"Book Now"} clr={COLOR.white} ff={FONTS.semibold} size={10} bgclr={COLOR.orange} h={24} w={77} r={10} align={"center"} justify={"center"} mv={5} />
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 10
  },
  button: {
    padding: 5,
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
    marginVertical: 20
  },
  view2: {
    width: "60%"
  },
  view3: {
    flexDirection: "row"
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLOR.textDark
  },
  text3: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLOR.textDark
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLOR.bordorColor,
    borderRadius: 15,
    height: 70
  },
  view5: {
    justifyContent: "space-evenly"
  },
  text4: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.textDark
  },
  text5: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.orange
  },
  view6: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal:10,
    borderColor:COLOR.bordorColor,
    borderWidth:1,
    borderRadius:15
  },
  button1: {
    flexDirection: "row",
    alignItems: "center"
  },
  view7: {
    height: 110,
    borderRadius: 15,
    marginVertical: 10,
    shadowOpacity: 1,
    elevation: 10,
    shadowColor: COLOR.placeHolderColor,
    backgroundColor: COLOR.white,
    flexDirection: "row"
  },
  img: {
    height: 110,
    width: 100
  },
  text6: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark
  },
  view8: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view9: {
    width: 260,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  view10: {
    flexDirection: "row",
    alignItems: "center"
  },
  text7: {
    fontFamily: FONTS.semibold,
    color: COLOR.textDark,
    fontSize: 14,
    marginLeft: 5
  },
  text8:{
    fontFamily:FONTS.medium,
    fontSize:12,
    color:COLOR.lightgrey,
    marginLeft:5
  },
  text9:{
    fontFamily:FONTS.bold,
    fontSize:18,
    color:COLOR.textDark
  },
  view11:{
    flex:1
  },
  text10:{
    fontFamily:FONTS.medium,
    fontSize:12,
    color:COLOR.lightgrey,
    marginLeft:5
  },
  button2:{
    height:32,
    width:90,
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:COLOR.white,
    justifyContent:"center",
    marginRight:10,
  }
})
export default Services;