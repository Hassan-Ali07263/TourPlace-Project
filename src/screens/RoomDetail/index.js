import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native';
import { BackBlack, Bed, Gonext, Man, Smoke } from '../../assets/svg';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { IMAGES } from '../../assets/images';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';

const RoomDetail = () => {

  const navigation=useNavigation();

  const details = [
    {
      id: 1,
      name: "Deluxe Double Bed With Balcony",
      rooms: "01 Room",
      price: "$85",
      time: "(For 01 Night/Room)",
      guests: "02 Guests",
      condition: "Non-Smoking Room",
      image: IMAGES.BEDS
    },
    {
      id: 2,
      name: "Deluxe Double Bed With Balcony",
      rooms: "01 Room",
      price: "$85",
      time: "(For 01 Night/Room)",
      guests: "02 Guests",
      condition: "Non-Smoking Room",
      image: IMAGES.BEDS
    },
    {
      id: 3,
      name: "Deluxe Double Bed With Balcony",
      rooms: "01 Room",
      price: "$85",
      time: "(For 01 Night/Room)",
      guests: "02 Guests",
      condition: "Non-Smoking Room",
      image: IMAGES.BEDS
    },
    {
      id: 4,
      name: "Deluxe Double Bed With Balcony",
      rooms: "01 Room",
      price: "$85",
      time: "(For 01 Night/Room)",
      guests: "02 Guests",
      condition: "Non-Smoking Room",
      image: IMAGES.BEDS
    },
  ]
  return (
    <ScrollView style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />

      <View style={styles.view1}>
        <TouchableOpacity onPress={()=>navigation.goBack()}
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Select Room</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={details}
          renderItem={({ item }) => {
            return (
              <View style={styles.view3}>
                <Image style={styles.img} source={item.image} />
                <View style={styles.view6}>
                  <Text style={styles.text1}>{item.name}</Text>
                  <View style={styles.view4}>
                    <View style={styles.view5}>
                      <Bed />
                      <Text style={styles.text2}>{item.rooms}</Text>
                    </View>
                    <Text style={styles.text3}>{item.price}</Text>
                  </View>

                  <View style={styles.view4}>
                    <View style={styles.view5}>
                      <Man />
                      <Text style={styles.text2}>{item.guests}</Text>
                    </View>
                    <Text style={styles.text2}>{item.time}</Text>
                  </View>

                  <View style={styles.view5}>
                    <Smoke />
                    <Text style={styles.text2}>{item.condition}</Text>
                  </View>

                  <View style={styles.view4}>
                    <TouchableOpacity onPress={()=>navigation.navigate("HotelDetails")}
                    style={styles.view5}>
                      <Text style={styles.text4}>View More Details</Text>
                      <Gonext />
                    </TouchableOpacity>
                    <Buttons
                      title={"Select Room"} clr={COLOR.white} ff={FONTS.semibold} size={12} bgclr={COLOR.orange} h={31} w={115} r={10} align={"center"} justify={"center"} mv={10} />
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 10
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
  view3: {
    height: 340,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: COLOR.white
  },
  img: {
    height: 165,
    width: "100%",
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLOR.textDark,
    marginBottom: 10
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.lightgrey,
    marginLeft: 10
  },
  text3: {
    fontFamily: FONTS.semibold,
    color: COLOR.textDark,
    fontSize: 24
  },
  view4: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  view5: {
    flexDirection: "row",
    alignItems: "center"
  },
  view6: {
    marginHorizontal: 10
  },
  text4: {
    fontFamily: FONTS.semibold,
    fontSize: 12,
    color: COLOR.textDark,
    marginRight: 5
  }
})
export default RoomDetail;