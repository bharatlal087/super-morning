import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationBar, StyleButton } from "../../componants";
import EnterPinView from "../../componants/EnterPinView";
import VerifyOtpController from "./VerifyOtpController";
import CommonStyle from "../../utility/CommonStyle";

function VerifyOtpScreen(props: {
    [x: string]: any
}): JSX.Element {
    const mobile = props.route.params.mobile
    const token = props.route.params.token
    const [code, setCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { verifyOTP, gotoHome } = VerifyOtpController();

    const submitTapped = async () => {
        setLoading(true)
        let result = await verifyOTP(token, code)
        setLoading(false)
        if (result.error) {
            setErrorMessage("Error: " + result.error)
        } else {
            gotoHome()
        }
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior='padding'>
                <View style={CommonStyle.container}>
                    <NavigationBar title="" />
                    <View style={{ padding: 16, paddingTop: 10 }}>
                        <Text style={styles.heading}>Enter Verification Code</Text>
                        <Text style={styles.subheading}>
                            <Text>Please enter the verification code sent{"\n"}to</Text>
                            <Text style={{ color: '#17B760', fontWeight: '700' }}> +91-{mobile}</Text>
                        </Text>
                        <EnterPinView style={{marginTop: 30}} value="555555" onChangeText={(text) => {
                            setCode(text)
                            setErrorMessage('')
                        }} />
                        <Text style={CommonStyle.errorMessage}>{errorMessage}</Text>
                    </View>
                    <View style={{ flexGrow: 1 }}></View>
                    <View style={{ padding: 16 }}>
                        <StyleButton title="SUBMIT" onPress={submitTapped} disabled={code.length !== 6} loader={loading} />
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
});

export default VerifyOtpScreen;