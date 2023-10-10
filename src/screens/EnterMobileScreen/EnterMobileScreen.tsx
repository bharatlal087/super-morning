import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MobileTextField, StyleButton } from "../../componants";
import EnterMobileController from "./EnterMobileController";
import CommonStyle from "../../utility/CommonStyle";

function EnterMobileScreen(): JSX.Element {
    const [mobile, setMobile] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const { gotoVerifyOTP, generateOTP } = EnterMobileController();

    const nextTapped = async () => {
        setLoading(true)
        let result = await generateOTP(mobile)
        setLoading(false)
        if (result.error) {
            setErrorMessage("Error: " + result.error)
        } else {
            gotoVerifyOTP(mobile, result.data.token)
        }
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior='padding'>
                <View style={CommonStyle.container}>
                    <View style={{ padding: 16 }}>
                        <Text style={styles.heading}>Enter your mobile number</Text>
                        <Text style={styles.subheading}>We need to verify you. We will send you a one time verification code. </Text>
                        <MobileTextField autoFocus={false} onChangeText={(text) => {
                            setErrorMessage('')
                            setMobile(text)
                        }} />
                        <Text style={CommonStyle.errorMessage}>{errorMessage}</Text>
                    </View>
                    <View style={{ flexGrow: 1 }}></View>
                    <View style={{ padding: 16 }}>
                        <StyleButton title="NEXT" onPress={nextTapped} disabled={!(mobile.length == 10)} loader={loading} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    heading: {
        color: '#37474F',
        fontWeight: '600',
        fontSize: 20
    },
    subheading: {
        marginTop: 10,
        color: '#37474F',
        fontSize: 16,
        lineHeight: 24
    }
})

export default EnterMobileScreen;