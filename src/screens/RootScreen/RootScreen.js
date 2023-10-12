import React, { useEffect } from "react";
import { View } from "react-native";
import StorageClient from "../../data/storage/StorageClient";
import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../../navigation/screenMap";

const RootScreen = () => {
    const navigation = useNavigation();
    const { SCGetString } = StorageClient();

    const loadRootScreen = async () => {
        const token = await SCGetString('accessToken');
        if (token) {
            navigation.navigate(screenMap.Home)
        } else {
            navigation.navigate(screenMap.EnterMobile)
        }
    }

    useEffect(() => {
        loadRootScreen()
    });

    return (
        <View></View>
    )
}

export default RootScreen;