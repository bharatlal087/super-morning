import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

function pinAtIndex(index: number, value: string): string {
    let array = Array.from(value)
    if (array[index]) {
        return array[index]
    }
    return ""
}

function EnterPinView(props: {
    style: { [key: string]: string | number };
    value: string;
    onChangeText: ((text: string) => void)
}): JSX.Element {
    const [code, setCode] = useState("");
    return (
        <View style={[props.style, { alignItems: 'center' }]}>
            <TextInput
                style={{ position: 'absolute', color: '#FFFFFF00' }}
                autoFocus={true}
                keyboardType='numeric'
                maxLength={6}
                selectionColor={'#FFFFFF00'}
                onChangeText={(text) => {
                    setCode(text)
                    props.onChangeText(text)
                }}
            ></TextInput>
            <View style={{ flexShrink: 1, flexDirection: 'row', gap: 8 }}>
                <PinBox text={pinAtIndex(0, code)} />
                <PinBox text={pinAtIndex(1, code)} />
                <PinBox text={pinAtIndex(2, code)} />
                <PinBox text={pinAtIndex(3, code)} />
                <PinBox text={pinAtIndex(4, code)} />
                <PinBox text={pinAtIndex(5, code)} />
            </View>
        </View>
    )
}

function PinBox(props: { text: string }): JSX.Element {
    return (
        <View style={styles.pinBox}>
            <Text style={styles.pinBoxText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pinBox: {
        justifyContent: 'center',
        height: 50,
        width: 40,
        borderColor: '#17B760',
        borderWidth: 2,
        borderRadius: 8
    },
    pinBoxText: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '700',
        color: '#17B760'
    }
})

export default EnterPinView;