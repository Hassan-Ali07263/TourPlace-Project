import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack, Hotel, Locate, Plane } from '../../assets/svg';
import Radio from '../../components/Radio';

const Notification = () => {
  const [check,setCheck]=useState(false);
  const notify = [
    {
      id: 1,
      name: "Hotel Booking",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "12:45 PM",
      date: "August 12, 2023",
      icon: Hotel,
    },
    {
      id: 2,
      name: "Flight Booking",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "12:45 PM",
      date: "August 12, 2023",
      icon: Plane,
    },
    {
      id: 3,
      name: "App Update",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "03:45 PM",
      date: "August 11, 2023",
      icon: Locate,
    },
    {
      id: 4,
      name: "Flight Booking",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "03:45 PM",
      date: "August 11, 2023",
      icon: Plane,
    },
    {
      id: 5,
      name: "Hotel Booking",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "12:45 PM",
      date: "August 11, 2023",
      icon: Hotel,
    },
    {
      id: 6,
      name: "Hotel Booking",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "12:45 PM",
      date: "August 12, 2023",
      icon: Hotel,
    },
    {
      id: 7,
      name: "Hotel Booking",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "12:45 PM",
      date: "August 12, 2023",
      icon: Hotel,
    },
    {
      id: 8,
      name: "Hotel Booking",
      description: "Lorem ipsum dolor sit amet this for the consectetur.",
      time: "12:45 PM",
      date: "August 12, 2023",
      icon: Hotel,
    },

  ]
  return (
    <ScrollView style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <View style={styles.view1}>
        <TouchableOpacity
        style={styles.button}>
          <BackBlack/>
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Notification</Text>
        </View>
      </View>

      <Text style={styles.text1}>Today</Text>

      <View>
        <FlatList
          data={notify}
          renderItem={({ item }) => {
            return (
              <View style={styles.view4}>
                <TouchableOpacity style={styles.button1}>
                <Radio onClick={()=>setCheck(!check)} checks={check}/>
                </TouchableOpacity>
                <View style={styles.view3}>
                  <item.icon style={styles.icons} />
                  <View style={styles.view6}>
                    <Text style={styles.text2}>{item.name}</Text>
                    <Text style={styles.text3}>{item.description}</Text>
                    <View style={styles.view5}>
                      <Text style={styles.text3}>{item.time}</Text>
                      <Text style={styles.text3}>{item.date}</Text>
                    </View>
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
  text1: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLOR.lightgrey,
    marginLeft: 30
  },
  text2: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark,

  },
  text3: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLOR.textLight
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: COLOR.white,
    height: 100,
    width: "90%",
    padding:5,
    shadowColor:COLOR.lightgrey,
    shadowOpacity:1,
    elevation:10,
    borderRadius:15
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    marginHorizontal: 10,
    marginVertical: 10
  },
  icons: {
    marginHorizontal: 10
  },
  view5: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view6:{
    width:"80%",
  },
  button1:{
    padding:5
  }
})
export default Notification;