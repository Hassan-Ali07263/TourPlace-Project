import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { COLOR, FONTS } from '../../enums/StyleFonts';
import { BackBlack, Correct, Eye, Facebook, Google, MainLogo } from '../../assets/svg';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import { MMKV } from 'react-native-mmkv';
export const stored = new MMKV();
const SignUp = () => {
    const navigation = useNavigation();
    const [Phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(true);
    const [passwordErr, setPasswordErr] = useState(false)
    const [phoneErr, setPhoneErr] = useState(false)

    const handelPassword = (text) => {
        setPassword(text)
        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{6,}$/
        setPasswordErr(!strongPasswordRegex.test(text))
    }

    const handelPhone = (text) => {
        setPhone(text)
        console.log("line 27.......")
        const phoneRegex = /^\+?(\d{1,4})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/
        console.log(phoneRegex.test(text))
        setPhoneErr(!phoneRegex.test(text))
    }

    const Signups = () => {
        if (Phone != "" && password != "") {
            if (phoneErr === false && passwordErr === false) {
                stored.set("number", Phone)
                stored.set("password", password)
                navigation.navigate("OtpScreen")
                setPhone("")
                setPassword("")
            }
        }
        else {
            Alert.alert("Oops", "Fill info properly")
        }
    }
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.button}>
                    <BackBlack />
                </TouchableOpacity>

                <Text style={styles.text}>Sign Up</Text>

                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.text1}>English</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.view2}>
                <MainLogo />
            </View>

            <View style={styles.view3}>
                <Text style={styles.text2}>Enter your mobile number</Text>
                <View>
                    <PhoneInput
                        defaultValue={Phone}
                        defaultCode='PK'
                        layout="second"
                        onChangeFormattedText={(text) => handelPhone(text)}
                        containerStyle={styles.container}
                        textInputStyle={styles.textInp}
                        textContainerStyle={styles.textContainer}
                        placeholder='1712345678'
                        textInputProps={{ placeholderTextColor: COLOR.placeHolderColor }}
                    />
                </View>
                {
                    phoneErr ? <Text style={styles.text8}>Enter correct number</Text> : null
                }

                <Text style={styles.text2}>Enter your password</Text>
                <View style={styles.view4}>
                    <Input clr={COLOR.black} placeclr={COLOR.placeHolderColor} place={"***************"} w={"90%"} val={password} visibility={visible} changedValue={(text) => handelPassword(text)} />
                    <TouchableOpacity onPress={() => setVisible(!visible)}>
                        <Eye />
                    </TouchableOpacity>
                </View>
                {
                    passwordErr ? <Text style={styles.text8}>Enter correct and strong password</Text> : null
                }
                <TouchableOpacity onPress={() => navigation.navigate("ResetScreen")}
                    style={styles.button3}>
                    <Text style={styles.text9}>Reset password</Text>
                </TouchableOpacity>
                <Buttons onClick={Signups}
                    title={"Send OTP Code"} clr={COLOR.white} ff={FONTS.semibold} size={16} bgclr={COLOR.orange} h={48} w={"100%"} r={15} align={"center"} justify={"center"} mv={30} />

                <View style={styles.view5}>
                    <Text style={styles.text3}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.text4}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text5}>or</Text>

                <TouchableOpacity style={styles.button2}>
                    <Google />
                    <Text style={styles.text6}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Facebook />
                    <Text style={styles.text6}>Continue with Facebook</Text>
                </TouchableOpacity>

                <Text style={styles.text5}>or</Text>

                <TouchableOpacity>
                    <Text style={styles.text7}>Continue as Guest</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    view1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    text: {
        fontFamily: FONTS.semibold,
        color: COLOR.textDark,
        fontSize: 18
    },
    button: {
        padding: 10
    },
    button1: {
        borderColor: COLOR.orange,
        borderWidth: 1,
        borderRadius: 8,
        height: 30,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5
    },
    text1: {
        color: COLOR.orange,
        fontFamily: FONTS.medium,
        fontSize: 14
    },
    view2: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20
    },
    text2: {
        fontFamily: FONTS.semibold,
        fontSize: 14,
        color: COLOR.textDark,
        marginTop: 15,
        marginVertical: 5
    },
    view3: {
        marginHorizontal: 15,
    },
    view4: {
        borderWidth: 1,
        borderColor: COLOR.bordorColor,
        borderRadius: 15,
        height: 48,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text3: {
        fontFamily: FONTS.semibold,
        fontSize: 14,
        color: COLOR.placeHolderColor,
    },
    text4: {
        fontFamily: FONTS.semibold,
        fontSize: 14,
        color: COLOR.orange,
    },
    view5: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    text5: {
        fontFamily: FONTS.semibold,
        fontSize: 14,
        color: COLOR.placeHolderColor,
        alignSelf: "center",
        marginVertical: 15
    },
    text6: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLOR.textDark,
        marginLeft: 10
    },
    button2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        borderWidth: 1,
        borderColor: COLOR.bordorColor,
        borderRadius: 15,
        marginVertical: 10
    },
    text7: {
        fontFamily: FONTS.semibold,
        fontSize: 14,
        color: COLOR.lightgrey,
        borderBottomWidth: 1,
        alignSelf: "center",
        borderColor: COLOR.lightgrey
    },
    container: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: COLOR.bordorColor,
        width: "100%",
    },
    textInp:
    {
        color: "black",
        height: 48,
        backgroundColor: "white"
    },
    textContainer: {
        height: 48,
        borderRadius: 15,
        backgroundColor: "white",
        color: "black"
    },
    text8: {
        color: COLOR.orange,
        fontSize: 10,
        fontFamily: FONTS.regular
    },
    button3: {
        alignSelf: "flex-end",
        marginTop: 10
    },
    text9: {
        color: COLOR.orange,
        fontSize: 12,
        fontFamily: FONTS.semibold,
        borderBottomWidth: 1,
        borderColor: COLOR.orange
    }
})
export default SignUp;