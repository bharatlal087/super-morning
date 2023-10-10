import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function StyleButton(props: {
    disabled: boolean | undefined; 
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    title: string;
    loader: boolean
}): JSX.Element {
    const isDisabled = props.disabled || props.loader
    return (
        <TouchableOpacity
         activeOpacity={0.8} onPress={props.onPress}
         disabled={isDisabled}>
            <View style={[styles.container, {backgroundColor: isDisabled ? '#BFBFBF' : '#17B760'}]}>
                <Text style={styles.text}>{props.loader ? 'PLEASE WAIT...' : props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 16,
        borderRadius: 30,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
})

export default StyleButton;