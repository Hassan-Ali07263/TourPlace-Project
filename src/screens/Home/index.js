import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { IMAGES } from '../../assets/images';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Beach, Boat, Bus, Camp, Hotel, Lake, MainLogoWhite, Map, Mountain, Plane, Star } from '../../assets/svg';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const data = [
    {
      id: 1,
      image: IMAGES.HOME1,
      address: "Kanchenjungha",
      location: "Rangpur, Bangladesh",
      rating: 4.7
    },
    {
      id: 2,
      image: IMAGES.HOME1,
      address: "Cox’s Bazar Sea",
      location: "Cox’s Bazar, Bangladesh",
      rating: 4.5
    },
    {
      id: 3,
      image: IMAGES.HOME1,
      address: "Kanchenjungha",
      location: "Rangpur, Bangladesh",
      rating: 4.7
    },
  ]

  const Event = [
    {
      id: 1,
      image: IMAGES.EVENT1
    },
    {
      id: 2,
      image: IMAGES.EVENT2
    },
    {
      id: 3,
      image: IMAGES.EVENT3
    },
  ]

  const comps = [
    { id: 1, name: "Hotel", icon: Hotel },
    { id: 2, name: "Flight", icon: Plane },
    { id: 3, name: "Bus", icon: Bus },
    { id: 4, name: "Boat", icon: Boat },
  ]
  return (
    <ScrollView style={styles.view}>
      <StatusBar backgroundColor={COLOR.orange} barStyle={"light-content"} />

      <ImageBackground style={styles.imgback} source={IMAGES.HOMEIMG}>
        <View style={styles.view1}>
          <TouchableOpacity
            style={styles.button}>
            <Ionicons name="menu-outline" size={30} color={COLOR.white} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Image style={styles.img} source={IMAGES.PROFILE} />
          </TouchableOpacity>

        </View>
        <View style={styles.view2}>
          <MainLogoWhite />
        </View>
      </ImageBackground>

      <View style={styles.view3}>
        <Ionicons name="search-outline" size={20} color={COLOR.orange} />
        <Input clr={COLOR.black} ph={10} placeclr={COLOR.placeHolderColor} place={"Search any places..."} w={"100%"} val={search} changedValue={(text) => setSearch(text)} />
      </View>

      <View style={styles.view4}>

        <View style={styles.view5}>
          <Text style={styles.text}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Categories")}
            style={styles.button1}>
            <Text style={styles.text1}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view6}>
          <TouchableOpacity style={styles.button3}>
            <Mountain />
            <Text style={styles.text2}>Mountains</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <Beach />
            <Text style={styles.text2}>Beach</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <Lake />
            <Text style={styles.text2}>Lakes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <Camp />
            <Text style={styles.text2}>Camp</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view7}>
          <Text style={styles.text}>Most Visited</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MostVisited")}
            style={styles.button1}>
            <Text style={styles.text1}>See All</Text>
          </TouchableOpacity>
        </View>

        <View>
          {
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={styles.view8}>
                    <ImageBackground style={styles.imgback1} source={item.image}>
                      <View style={styles.view10}>
                        <View style={styles.view11}>
                          <View style={styles.view9}>
                            <Star />
                            <Text style={styles.text3}>{item.rating}</Text>
                          </View>
                          <View>
                            <Text style={styles.text5}>{item.address}</Text>
                            <View style={styles.view9}>
                              <Map />
                              <Text style={styles.text4}>{item.location}</Text>
                            </View>
                          </View>
                        </View>
                        <TouchableOpacity style={styles.button2}>
                          <Ionicons name="bookmark" size={20} color={COLOR.orange} />
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </View>
                )
              }}
            />
          }
        </View>

        <View style={styles.view12}>
          <Text style={styles.text}>Services</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Services")}
            style={styles.button1}>
            <Text style={styles.text1}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Add sercices here */}
        <View>
          <FlatList
            data={comps}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.button4}>
                  <item.icon />
                  <Text style={styles.text6}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View style={styles.view12}>
          <Text style={styles.text}>Top Events</Text>
          <TouchableOpacity onPress={() => navigation.navigate("WorldMostVisited")}
            style={styles.button1}>
            <Text style={styles.text1}>See All</Text>
          </TouchableOpacity>
        </View>

        {
          <FlatList
            data={Event}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.view13}>
                  <Image style={styles.img1} source={item.image} />
                </View>
              )
            }}
          />
        }

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 10
  },
  imgback: {
    width: "100%",
    height: 180
  },
  button: {
    backgroundColor: COLOR.bordorColor,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  img: {
    height: 45,
    width: 45,
    borderColor: COLOR.imgborder,
    borderWidth: 2,
    borderRadius: 30
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20
  },
  view2: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  view3: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    backgroundColor: COLOR.white,
    height: 48,
    borderRadius: 15,
    position: "absolute",
    alignSelf: "center",
    marginTop: 150,
    shadowColor: COLOR.placeHolderColor,
    shadowOpacity: 1,
    elevation: 10
  },
  text: {
    fontFamily: FONTS.semibold,
    fontSize: 18,
    color: COLOR.textDark
  },
  text1: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLOR.orange
  },
  button1: {
    padding: 10
  },
  view4: {
    marginHorizontal: 20,
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10
  },
  view12: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLOR.placeHolderColor
  },
  button3: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 75,
    width: 75,
    backgroundColor: COLOR.white,
    borderRadius: 10,
    shadowColor: COLOR.placeHolderColor,
    shadowOpacity: 1,
    elevation: 10
  },
  view6: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  view8: {
    height: 184,
    width: 160,
    borderRadius: 15,
    marginRight: 50,
  },
  imgback1: {
    height: 160,
    width: 185,
    padding: 5
  },
  button2: {
    height: 30,
    width: 30,
    backgroundColor: COLOR.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  text3: {
    color: COLOR.white,
    fontFamily: FONTS.semibold,
    fontSize: 12,
  },
  view9: {
    flexDirection: "row",
    alignItems: "center"
  },
  text4: {
    color: COLOR.white,
    fontFamily: FONTS.semibold,
    fontSize: 8
  },
  text5: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.white
  },
  view10: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view11: {
    justifyContent: "space-between",
    height: "100%"
  },
  view13: {
    width: "40%"
  },
  img1: {
    height: 70,
    width: 120
  },
  text6: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLOR.lightgrey,
    marginLeft: 5
  },
  button4: {
    height: 32,
    width: 90,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.white,
    justifyContent: "center",
    marginRight: 10,
  }
})
export default Home;