import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack } from '../../assets/svg';
import AntDesign from "react-native-vector-icons/AntDesign"
import Input from '../../components/Input';
import { IMAGES } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const chats=[
  {id:1,name:"Ishtiaq Zaman",discription:"Hello Raju How are you?",image:IMAGES.MAN1},
  {id:2,name:"Ferdous Hossein",discription:"Whats up?",image:IMAGES.MAN2},
  {id:3,name:"Hasan Ali",discription:"Thank you.",image:IMAGES.MAN3},
  {id:4,name:"Majharul Alom",discription:"Can we meet tomorrow?",image:IMAGES.MAN1},
  {id:5,name:"Raju Ahamed",discription:"Let’s go to a trip?",image:IMAGES.MAN2},
  {id:6,name:"Khalid Hossein",discription:"Hey Raju, nice to meet you.",image:IMAGES.MAN3},
  {id:7,name:"Ishtiaq Zaman",discription:"Hello Raju How are you?",image:IMAGES.MAN1},
  {id:8,name:"Kamal Khan",discription:"Hello Raju How are you?",image:IMAGES.MAN2},
  {id:9,name:"Ishtiaq Zaman",discription:"Hey Raju, nice to meet you.",image:IMAGES.MAN3},
  {id:10,name:"Khalid Hossein",discription:"Let’s go to a trip?",image:IMAGES.MAN2},
  {id:11,name:"Ishtiaq Zaman",discription:"Hello Raju How are you?",image:IMAGES.MAN1},
  {id:12,name:"Raju Ahamed",discription:"Can we meet tomorrow?",image:IMAGES.MAN3},
  {id:13,name:"Majharul Alom",discription:"Hello Raju How are you?",image:IMAGES.MAN1},
  {id:14,name:"Hasan Ali",discription:"Thank you.",image:IMAGES.MAN2},
  {id:15,name:"Ferdous Hossein",discription:"Hello Raju How are you?",image:IMAGES.MAN3},

]
const Chat = () => {

  const navigation=useNavigation();

  const [toggle, setToggle] = useState(0);
  const [seach,setSearch]=useState('');
  const [currentDate,setCurrentDate]=useState('');
  const [currentTime,setCurrentTime]=useState('');
  const [filters,setFilters]=useState(chats)

  const filterFun=(text)=>
  {
    setSearch(text);
    const filtering=chats.filter(item => item?.name?.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    setFilters(filtering)
  }
  
  useEffect(()=>{
    const interval=setInterval(() => {
      const date=new Date();
      const hours=date.getHours();
      const mints=date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const day=date.getDate();
      const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      const month = monthNames[date.getMonth()];
      const year=date.getFullYear()
      const formatedDate=`${day} ${month} ${year}`;
      setCurrentDate(formatedDate)

      const formatedTime=`${hours}:${mints} ${ampm} `
      setCurrentTime(formatedTime)
    }, 1000);
    return ()=>clearInterval(interval);
  },[])
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />

      <View style={styles.view1}>
        <TouchableOpacity
          style={styles.button}>
          <BackBlack />
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>Chat</Text>
        </View>
      </View>

      <View style={styles.view3}>
        <TouchableOpacity onPress={() => setToggle(1)}
          style={toggle === 1 ? styles.button1 : styles.button2}>
          <Text style={toggle === 1 ? styles.text1 : styles.text2}>Conversations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToggle(0)}
          style={toggle === 0 ? styles.button1 : styles.button2}>
          <Text style={toggle === 0 ? styles.text1 : styles.text2}>All Friends</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view6}>
        <AntDesign name="search1" color={COLOR.lightgrey} size={25}/>
        <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"Search any chats..."} w={"90%"} val={seach} changedValue={(text) => filterFun(text)} />
      </View>

      <View style={styles.view4}>
        <FlatList
        data={filters}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=>navigation.navigate("ChatDetails")}
            style={styles.button3}>
              <Image style={styles.img} source={item.image}/>
              <View>
              <View style={styles.view5}>
                <Text style={styles.text4}>{item.name}</Text>
                <Text style={styles.text5}>{currentDate}</Text>
              </View>
              <View style={styles.view5}>
                <Text style={styles.text3}>{item.discription}</Text>
                <Text style={styles.text5}>{currentTime}</Text>
              </View>
              </View>
            </TouchableOpacity>
          )
        }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
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
    width: "55%"
  },
  view3: {
    height: 48,
    backgroundColor: COLOR.white,
    marginHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    shadowColor: COLOR.lightgrey,
    shadowOpacity: 1,
    elevation: 5,
    marginTop: 10
  },
  text1: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.white
  },
  text2: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLOR.textDark
  },
  button1: {
    height: 48,
    width: "50%",
    borderRadius: 15,
    backgroundColor: COLOR.orange,
    justifyContent: "center",
    alignItems: "center"
  },
  button2: {
    height: 48,
    width: "50%",
    borderRadius: 15,
    backgroundColor: COLOR.white,
    justifyContent: "center",
    alignItems: "center"
  },
  view6: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal:15,
    paddingHorizontal:10,
    borderColor:COLOR.bordorColor,
    borderWidth:1,
    borderRadius:15
  },
  img:{
    height:48,
    width:48,
    borderRadius:50,
    marginRight:15
  },
  text4:{
    fontFamily:FONTS.semibold,
    fontSize:14,
    color:COLOR.textDark
  },
  text3:{
    fontFamily:FONTS.regular,
    fontSize:12,
    color:COLOR.lightgrey
  },
  button3:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:15,
    marginVertical:10
  },
  view4:{
    flex:1
  },
  text5:{
    fontFamily:FONTS.medium,
    fontSize:10,
    color:COLOR.lightgrey
  },
  view5:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"90%"
  }
})
export default Chat;