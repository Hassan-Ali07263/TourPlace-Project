import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, StatusBar, TouchableOpacity, Image } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack, GoBlack, Mapgrey, StarOrange } from '../../assets/svg';
import { IMAGES } from '../../assets/images';
import Ionicons from "react-native-vector-icons/Ionicons"

const Saved = () => {
  const places = [
    { id: 1, name: "Sajek Valley", address: "Bandarban, Bangladesh", rating: "4.5", image: IMAGES.SAJEKVALLEY },
    { id: 2, name: "Saint Martin’s Island", address: "Cox’s Bazar, Bangladesh", rating: "4.7", image: IMAGES.SAINTVALLEY },
    { id: 3, name: "Tajhat Jamidar Bari", address: "Rangpur, Bangladesh", rating: "4.4", image: IMAGES.TAJHATVALLEY },

  ]
  const events = [
    { id: 1, name: "Kaptai Lake Tour 2022", address: "Rangpur, Bangladesh", rating: "12+ People Already Joined", image: IMAGES.KAPTAILAKE },
    { id: 2, name: "Sonargaon Tour 2022", address: "Narayanganj, Bangladesh", rating: "20+ People Already Joined", image: IMAGES.SONARGONTOUR },
    { id: 3, name: "Jaflong Tour 2022", address: "Rangpur, Bangladesh", rating: "12+ People Already Joined", image: IMAGES.JAFLONGTOUR },

  ]
  return (
    <ScrollView style={styles.view}>
      <StatusBar barStyle={"dark-content"} backgroundColor={COLOR.white} />

      <View style={styles.view1}>
        <TouchableOpacity
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Saved</Text>
        </View>
      </View>

      <View>
        <Text style={styles.text1}>Places</Text>
        <FlatList
          data={places}
          renderItem={({ item }) => {
            return (
              <View style={styles.view3}>
                <View style={styles.view5}>
                  <Image style={styles.img} source={item.image} />
                  <View>
                    <Text style={styles.text2}>{item.name}</Text>
                    <View style={styles.view4}>
                      <Mapgrey />
                      <Text style={styles.text3}>{item.address}</Text>
                    </View>
                    <View style={styles.view4}>
                      <StarOrange />
                      <Text style={styles.text4}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.button1}>
                  <Ionicons name="bookmark" color={COLOR.orange} size={20} />
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

      <View>
        <Text style={styles.text1}>Events</Text>
        <FlatList
          data={events}
          renderItem={({ item }) => {
            return (
              <View style={styles.view3}>
                <View style={styles.view5}>
                  <Image style={styles.img} source={item.image} />
                  <View>
                    <Text style={styles.text2}>{item.name}</Text>
                    <View style={styles.view4}>
                      <Mapgrey />
                      <Text style={styles.text3}>{item.address}</Text>
                    </View>
                    <View style={styles.view4}>
                      <Text style={styles.text5}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.button1}>
                  <Ionicons name="bookmark" color={COLOR.orange} size={20} />
                </TouchableOpacity>
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
    marginHorizontal: 15
  },
  button: {

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
    marginVertical: 15
  },
  view2: {
    width: "60%"
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark,
    marginVertical:10
  },
  text2: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark
  },
  text4: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark,
    marginLeft: 5
  },
  text5: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLOR.orange,
  },
  text3: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLOR.lightgrey,
    marginLeft: 5
  },
  img: {
    height: 60,
    width: 60,
    marginHorizontal: 10
  },
  view3: {
    backgroundColor: COLOR.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
    marginVertical: 10,
    borderRadius: 15,
    shadowOpacity: 1,
    elevation: 10,
    shadowColor: COLOR.lightgrey,
    paddingHorizontal: 5
  },
  view4: {
    flexDirection: "row",
    alignItems: "center"
  },
  view5: {
    flexDirection: "row"
  },
  button1: {
    padding: 5
  }
})
export default Saved;