import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack, Mapgrey, StarOrange } from '../../assets/svg';
import { IMAGES } from '../../assets/images';
import Buttons from '../../components/Buttons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const WorldMostVisited = () => {

  const navigation=useNavigation();

  const HotelList = [
    {
      id: 1,
      name: "Tajhat Jamidarbari",
      rating: 4.8,
      address: "Bangladesh",
      price: "$120",
      image: IMAGES.VISIT1
    },
    {
      id: 2,
      name: "Lake Fond",
      rating: 4.5,
      address: "India",
      price: "$250",
      image: IMAGES.VISIT2
    },
    {
      id: 3,
      name: "Venice",
      rating: 4.6,
      address: "Italy",
      price: "$400",
      image: IMAGES.VISIT3
    },
    {
      id: 4,
      name: "Saint Martin’s Island",
      rating: 4.4,
      address: "Cox’s Bazar",
      price: "$150",
      image: IMAGES.VISIT4
    },
    {
      id: 5,
      name: "Kangchenjungha",
      rating: 4.9,
      address: "India",
      price: "$300",
      image: IMAGES.VISIT5
    },
    {
      id: 6,
      name: "Sajek Valley",
      rating: 4.8,
      address: "Bangladesh",
      price: "$140",
      image: IMAGES.VISIT6
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
      name: "Tajhat Jamidarbari",
      rating: 4.8,
      address: "Cox’s Bazar",
      price: "$500",
      image: IMAGES.VISIT1
    },
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
          <Text style={styles.text}>Most Visited</Text>
        </View>
      </View>

      <View style={styles.view11}>
        <FlatList
          data={HotelList}
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
                    </View>
                    <Buttons onClick={()=>navigation.navigate("PlaceDetails")}
                    title={"Book Now"} clr={COLOR.white} ff={FONTS.semibold} size={10} bgclr={COLOR.orange} h={24} w={77} r={10} align={"center"} justify={"center"} mv={5} />
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
    marginHorizontal:10
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
    marginVertical: 10
  },
  view2: {
    width: "60%"
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
  }
})
export default WorldMostVisited;