import React from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { IMAGES } from '../../assets/images';
import { BackBlack, BackWhite, Goods, Mapgrey, Star, StarOrange } from '../../assets/svg';
import Buttons from '../../components/Buttons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const PlaceDetails = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.orange} barStyle={"dark-content"} />
            <View style={styles.view3}>
                <ImageBackground style={styles.imgback} source={IMAGES.PLACEMAIN}>
                    <View style={styles.view1}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}
                            style={styles.button}>
                            <BackWhite />
                        </TouchableOpacity>
                        <View style={styles.view2}>
                            <Text style={styles.text}>Place Details</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.view4}>
                <View style={styles.view5}>
                    <Text style={styles.text1}>Saint Martin’s Island</Text>
                    <Text style={styles.text2}>$150</Text>
                </View>

                <View style={styles.view5}>
                    <View style={styles.view6}>
                        <Mapgrey />
                        <Text style={styles.text3}>Cox’s Bazar, Bangladesh</Text>
                    </View>
                </View>

                <View style={styles.view7}>
                    <StarOrange />
                    <Text style={styles.text5}>4.4</Text>
                    <Text style={styles.text6}>(</Text>
                    <Text style={styles.text3}>150 Reviews</Text>
                    <Text style={styles.text6}>)</Text>
                </View>

                <View style={styles.view8}>
                    <Text style={styles.text8}>About</Text>
                    <Text style={styles.text9}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Arcu, arcu dictumst habitant vel ut et pellentesque. Ut in egestas blandit netus in
                        scelerisque. Eget lectus ultrices pellentesque id.
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.text7}>Read More...</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text8}>Facilities</Text>

                <View style={styles.view9}>
                    <View style={styles.view10}>
                        <Goods />
                        <Text style={styles.text10}>Free Wifi</Text>
                    </View>

                    <View style={styles.view10}>
                        <Goods />
                        <Text style={styles.text10}>Pool</Text>
                    </View>

                    <View style={styles.view10}>
                        <Goods />
                        <Text style={styles.text10}>Breakfast</Text>
                    </View>

                    <View style={styles.view10}>
                        <Goods />
                        <Text style={styles.text10}>Lunch</Text>
                    </View>

                    <View style={styles.view10}>
                        <Goods />
                        <Text style={styles.text10}>Dinner</Text>
                    </View>
                </View>

                <View style={styles.view11}>
                    <TouchableOpacity style={styles.button1}>
                        <Ionicons name="bookmark" color={COLOR.orange} size={25} />
                    </TouchableOpacity>
                    <Buttons
                        title={"Select a Room"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"83%"} r={15} align={"center"} justify={"center"} mv={30} />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    view3: {
        flex: 1.2
    },
    imgback: {
        width: "100%",
        height: "100%"
    },
    view4: {
        flex: 2,
        padding: 10,

    },
    button: {
        padding: 10,
    },
    text: {
        fontFamily: FONTS.semibold,
        fontSize: 18,
        color: COLOR.white
    },
    view1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 10
    },
    view2: {
        width: "60%"
    },
    text1: {
        fontFamily: FONTS.semibold,
        color: COLOR.textDark,
        fontSize: 20
    },
    text2: {
        fontFamily: FONTS.semibold,
        color: COLOR.textDark,
        fontSize: 24
    },
    view5: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text4: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLOR.placeHolderColor
    },
    text3: {
        fontFamily: FONTS.medium,
        color: COLOR.lightgrey,
        fontSize: 14,
        marginLeft: 3
    },
    view6: {
        flexDirection: "row",
        alignItems: "center",
    },
    text5: {
        fontFamily: FONTS.semibold,
        fontSize: 14,
        color: COLOR.textDark
    },
    text6: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLOR.placeHolderColor
    },
    text7: {
        fontFamily: FONTS.semibold,
        fontSize: 14,
        color: COLOR.orange
    }, view7: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    text8: {
        fontFamily: FONTS.semibold,
        fontSize: 16,
        color: COLOR.textDark
    },
    text9: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLOR.lightgrey,
        marginTop: 10
    },
    view8: {
        marginBottom: 20
    },
    text10: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLOR.placeHolderColor,
        marginLeft: 5
    },
    view10: {
        flexDirection: "row",
        alignItems: "center"
    },
    view9: {
        marginTop: 20
    },
    button1: {
        height: 48,
        width: 48,
        borderRadius: 48,
        backgroundColor: COLOR.white,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    view11: {
        flexDirection: "row",
        alignItems: "center"
    }
})
export default PlaceDetails;