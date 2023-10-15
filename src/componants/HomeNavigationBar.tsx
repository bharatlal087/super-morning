import React, {} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Color } from '../constants/Colors';
import { text } from '../constants/AppStyle';


const HomeNavigationBar = (props: {onCartTap: () => void}) => {
    return (
        <View>
            <View style={styles.headerView}>
                <View style={styles.headerTextView}>
                    <Text style={text.title}>
                        Patel Nagar
                        <View>
                            <Image
                                source= {require('../../assets/images/chevron.down.circle.jpg')}
                                style={{ height: 12, width: 12, marginLeft: 5 }}
                            />
                        </View>
                    </Text>
                    <Text style={text.subtitle}>Gurgaon, Haryana - 122001</Text>
                </View>
                <View style={styles.cardView}>
                    <TouchableOpacity style={styles.buttonWrapper} onPress={props.onCartTap}>
                        <Image
                            source={require('../../assets/images/cart.png')}
                            style={styles.buttonImage}
                        />
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardText}>5</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerView: {
        height: 44,
        marginBottom: 8,
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTextView: {
        marginLeft: 14,
    },
    cardView: {
        bottom: -5,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 14,
    },
    buttonImage: {
        width: 22,
        height: 20,
    },
    buttonWrapper: {
        position: 'relative',
    },
    cardTextContainer: {
        position: 'absolute',
        bottom: 15,
        left: 14,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.solidGreen,
        borderRadius: 8,
    },
    buttonText: {
        width: 28,
        height: 20,
        color: Color.solidGreen,
        fontSize: 13,
        padding: 2,
        textAlign: 'center',
    },
    cardText: {
        color: "#FFFFFF",
        fontSize: 10,
        textAlign: "center",
        lineHeight: 16,
    },
});

export default HomeNavigationBar;