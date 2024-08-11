import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack, EditOrange, EditWhite, GoBlack, Helps, History, Info, Payment, Premium, Tips, Tracking } from '../../assets/svg';
import { IMAGES } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Buttons from '../../components/Buttons';

const Profile = () => {
  const navigation = useNavigation();
  const [cameraImg, setCameraImg] = useState('');
  const [open,setOpen]=useState(false)

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        setOpen(false)
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
        setOpen(false)
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setCameraImg(imageUri);
        setOpen(false)

      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        setOpen(false)
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        setOpen(false)
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setCameraImg(imageUri);
        setOpen(false)
        console.log(imageUri);
      }
    });
  }

  const profileData = [
    { id: 1, name: "Edit profile", icon: EditOrange },
    { id: 2, name: "Track My Bookings", icon: Tracking },
    { id: 3, name: "My History", icon: History },
    { id: 4, name: "Packing Tips", icon: Tips },
    { id: 5, name: "Payment Method", icon: Payment },
    { id: 6, name: "Help Center", icon: Helps },
    { id: 7, name: "Legal Info", icon: Info },

  ]
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />

      <View style={styles.view1}>
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>My Profile</Text>
        </View>
      </View>

      {
      cameraImg ? <Image style={styles.img} source={{uri:cameraImg}}/>:<Image style={styles.img} source={IMAGES.PROFILE} />
      
      }

      <TouchableOpacity onPress={()=>setOpen(true)}
        style={styles.button1}>
        <EditWhite />
      </TouchableOpacity>

      <View style={styles.view3}>
        <Text style={styles.text1}>Raju Ahamed</Text>
        <View style={styles.view4}>
          <Premium />
          <Text style={styles.text2}>Premium User</Text>
        </View>
        <Text style={styles.text3}>My Address: Uttara, Dhaka - 1230</Text>
      </View>

      <View style={styles.view7}>
        <FlatList
          data={profileData}
          renderItem={({ item }) => {
            return (
              <View style={styles.view5}>
                <View style={styles.view6}>
                  <item.icon />
                  <Text style={styles.text4}>{item.name}</Text>
                </View>
                <TouchableOpacity style={styles.button2}>
                  <GoBlack />
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

      <Modal visible={open} transparent={true} animationType={"slide"}>
        <View style={styles.view9}>
          <View style={styles.view8}>
            <Buttons onClick={handleCameraLaunch} title={"Open Camera"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"100%"} r={15} align={"center"} justify={"center"} mv={15} />
            <Buttons onClick={openImagePicker} title={"Open Gallery"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"100%"} r={15} align={"center"} justify={"center"} mv={15} />
            <Buttons onClick={()=>setOpen(false)} title={"Cancel"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.black} h={48} w={"50%"} r={15} align={"center"} justify={"center"} mv={15} />
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  view8: {
    backgroundColor: COLOR.white,
    width: "100%",
    height: 300,
    borderRadius: 20,
    borderColor: COLOR.bordorColor,
    borderWidth: 2,
    shadowColor: COLOR.lightgrey,
    elevation: 10,
    shadowOpacity: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  view9: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
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
  img: {
    height: 108,
    width: 108,
    alignSelf: "center",
    borderRadius: 100,
    borderColor: COLOR.lightgrey,
    borderWidth: 1,
    marginTop: 20

  },
  button1: {
    height: 32,
    width: 32,
    backgroundColor: COLOR.orange,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 150,
    left: 220
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
  },
  view3: {
    alignItems: "center",
    marginVertical: 15
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 20,
    color: COLOR.black
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLOR.lightgrey,
    marginLeft: 5
  },
  text3: {
    fontFamily: FONTS.semibold,
    fontSize: 14,
    color: COLOR.textDark
  },
  text4: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.textDark,
    marginLeft: 10
  },
  view6: {
    flexDirection: "row",
    alignItems: "center"
  },
  view5: {
    backgroundColor: COLOR.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    shadowColor: COLOR.lightgrey,
    shadowOpacity: 1,
    elevation: 5,
    height: 48,
    marginVertical: 10,
    marginHorizontal: 15
  },
  button2: {
    padding: 5
  }
})
export default Profile;