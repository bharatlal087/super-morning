import React from "react";
import { Image, ImageSourcePropType, TouchableOpacity, View } from "react-native";

function IconButton(props: {
    source: ImageSourcePropType;
    style?: { [key: string]: any };
    iconSize?: {height: number, width: number}
}): JSX.Element {
    return (
        <TouchableOpacity>
            <View style={[{ alignItems: 'center', justifyContent: 'center' }, props.style]}>
                <Image style={{ height: props.iconSize?.height ?? 25, width: props.iconSize?.width ?? 25, resizeMode: 'contain' }} source={props.source}></Image>
            </View>
        </TouchableOpacity>
    )
}

export default IconButton;