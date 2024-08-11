import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { Congrats } from '../../assets/svg';
import { useNavigation } from '@react-navigation/native';
import Buttons from '../../components/Buttons';

const Congratulations = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <Congrats />
            <Text style={styles.text}>You’re all set!</Text>

            <Buttons onClick={() => navigation.navigate("BottomTabs")}
                title={"Let’s Begin"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"100%"} r={15} align={"center"} justify={"center"} />

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: FONTS.semibold,
        fontSize: 20,
        marginVertical: 30,
        color: COLOR.textDark,
    }
})
export default Congratulations;