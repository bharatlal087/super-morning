import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function MobileTextField(props: {
    onChangeText: ((text: string) => void) | undefined; autoFocus: boolean | undefined; 
}): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.countryCode}><Text style={styles.countryCodeText}>+91</Text></View>
            <TextInput
                autoFocus={props.autoFocus}
                style={styles.mobileNumber}
                placeholder="Enter Mobile"
                keyboardType="numeric"
                maxLength={10}
                selectionColor={'#17B760'}
                onChangeText={props.onChangeText}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#17B760'
    },
    countryCode: {
        flex: 0,
        justifyContent: 'center',
        padding: 12,
    },
    countryCodeText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#17B760'
    },
    mobileNumber: {
        flex: 1,
        fontSize: 22,
        fontWeight: '700',
        color: '#17B760'
    }
})

export default MobileTextField;