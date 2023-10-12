import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { text } from "../constants/AppStyle";

function NavigationBar(props: { title: string }): JSX.Element {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <View style={styles.left}>
                        <Image source={require('../../assets/images/arrowLeft.png')}></Image>
                        <Text style={{ padding: 8, fontSize: 14 }}>BACK</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.title}><Text style={text.title} numberOfLines={1}>{props.title}</Text></View>
            <View style={styles.right}><Text></Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 44,
        paddingLeft: 16,
        paddingRight: 16
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})

export default NavigationBar;