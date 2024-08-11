import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import Swiper from 'react-native-swiper';
import { IMAGES } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const Onboardings = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.view1}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />

      <Swiper>

        <View style={styles.view}>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}
          style={styles.button}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
          <Image style={styles.img} source={IMAGES.Swiper1} />
          <Text style={styles.text1}>Explore The World With TourPlace</Text>
          <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur. Mi ultricies ultrices fermentum a. Duis neque lectus pharetra ac sed lorem.</Text>
        </View>

        <View style={styles.view}>
          <TouchableOpacity  onPress={()=>navigation.navigate("Login")}
          style={styles.button}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
          <Image style={styles.img} source={IMAGES.Swiper2} />
          <Text style={styles.text1}>Make Memories That Last a Lifetime</Text>
          <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur. Mi ultricies ultrices fermentum a. Duis neque lectus pharetra ac sed lorem.</Text>
        </View>

        <View style={styles.view}>
          <TouchableOpacity  onPress={()=>navigation.navigate("Login")}
          style={styles.button}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
          <Image style={styles.img} source={IMAGES.Swiper3} />
          <Text style={styles.text1}>Plan Your Dream Trip With Tourplace </Text>
          <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur. Mi ultricies ultrices fermentum a. Duis neque lectus pharetra ac sed lorem.</Text>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    fontFamily: FONTS.semibold,
    color: COLOR.textDark,
    fontSize: 16
  },
  view1: {
    flex: 1,
    backgroundColor: COLOR.white,

  },
  button: {
    width: 40,
    alignSelf: "flex-end",
  },
  img: {
    width: "95%",
    height: 340,
    marginTop: 40,
    alignSelf: "center"
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 24,
    color: COLOR.textDark,
    marginTop: 20
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.textLight,
    marginVertical: 30
  }
})
export default Onboardings;