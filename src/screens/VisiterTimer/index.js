import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { BackBlack, Bed, CheckIn, Man, MapOrange } from '../../assets/svg';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import Input from '../../components/Input';
import DropDownPicker from 'react-native-dropdown-picker';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';

const VisiterTimer = () => {
    const navigation=useNavigation();

    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState('')
    const [checkIn,setCheckIn]=useState("");
    const [checkOut,setCheckOut]=useState("");
    const [guest,setGuest]=useState("");
    const [Room,setRoom]=useState("")

    const item = [
        { label: "Dhaka, Bangladesh", value: "Dhaka, Bangladesh" },
        { label: "Dilhi, India", value: "Dilhi, India" },
        { label: "Islamabad, Pakistan", value: "Islamabad, Pakistan" },
        { label: "colombo, USA", value: "colombo, USA" }

    ]

    const SearchVisitor=()=>{
        if(current != "" && checkIn != "" && checkOut != "" && guest != "" && Room != "")
        {
            navigation.navigate("MostVisited",{adr:current,checkIn:checkIn,checkOut:checkOut,guest:guest,room:Room})
        }
        else{
            Alert.alert("Oops","Empty Fields")
        }
    }
    return (
        <View style={styles.view}>

            <View style={styles.view1}>
                <TouchableOpacity onPress={()=>navigation.goBack()}
                    style={styles.button}>
                    <BackBlack />
                </TouchableOpacity>
                <View style={styles.view2}>
                    <Text style={styles.text}>Search Hostel</Text>
                </View>
            </View>

            <View style={styles.view5}>
                <Text style={styles.text1}>Location</Text>
                <View style={styles.view4}>
                    <MapOrange />
                    <DropDownPicker style={styles.droper}
                        open={open}
                        setOpen={() => setOpen(!open)}
                        items={item}
                        value={current}
                        setValue={(val) => setCurrent(val)}
                    />
                </View>

                <View style={styles.view6}>
                    <View style={styles.view7}>
                        <Text style={styles.text1}>Check IN</Text>
                        <View style={styles.view3}>
                            <CheckIn />
                            <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"check in Date"} w={"90%"} ph={10} val={checkIn} changedValue={(text)=>setCheckIn(text)} />
                        </View>
                    </View>

                    <View style={styles.view7}>
                        <Text style={styles.text1}>Check IN</Text>
                        <View style={styles.view3}>
                            <CheckIn />
                            <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"check in Date"} w={"90%"} ph={10} val={checkOut} changedValue={(text)=>setCheckOut(text)}/>
                        </View>
                    </View>
                </View>

                <View style={styles.view6}>
                    <View style={styles.view7}>
                        <Text style={styles.text1}>Check IN</Text>
                        <View style={styles.view3}>
                            <Man />
                            <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"No. of guests"} w={"90%"} ph={10}  val={guest} changedValue={(text)=>setGuest(text)}/>
                        </View>
                    </View>

                    <View style={styles.view7}>
                        <Text style={styles.text1}>Check IN</Text>
                        <View style={styles.view3}>
                            <Bed />
                            <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"No. of rooms"} w={"90%"} ph={10} val={Room} changedValue={(text)=>setRoom(text)} />
                        </View>
                    </View>
                </View>

                <Buttons onClick={SearchVisitor} title={"Search"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"100%"} r={15} align={"center"} justify={"center"} mv={50} />

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
        marginVertical: 10
    },
    view2: {
        width: "60%"
    },
    view3: {
        flexDirection: "row",
        backgroundColor: COLOR.white,
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: COLOR.placeHolderColor,
        elevation: 10,
        shadowOpacity: 1
    },
    view4: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLOR.white,
        borderRadius: 15,
        paddingHorizontal: 10,
        shadowColor: COLOR.placeHolderColor,
        elevation: 10,
        shadowOpacity: 1
    },
    droper: {
        borderWidth: 0,
    },
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLOR.textDark,
        marginVertical: 5,
        marginTop: 20
    },
    view5: {
        marginHorizontal: 10,
    },
    view6: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    view7: {
        width: "45%",

    }
})
export default VisiterTimer;