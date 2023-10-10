import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Orders from '../Orders/Orders';
import Profile from '../Profile/Profile';
import {Color} from '../../constants/Colors';
const Tab = createBottomTabNavigator();

const AppBottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, borderTopColor: Color.solidGrey},
        tabBarActiveTintColor: Color.solidGreen,
        tabBarInactiveTintColor: Color.solidGrey,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            // const image = focused ? require("../../../assets/images/ic-tab-home-selected.png") : require("../../../assets/images/ic-tab-home.png")
            return (
              <View>
                <Image
                  source={require('../../../assets/images/ic-tab-home.png')}
                  tintColor={focused ? Color.solidGreen : Color.solidGrey}
                  resizeMode="contain"
                  style={{width: 24, height: 24}}
                />
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={require('../../../assets/images/ic-tab-orders.png')}
                  tintColor={focused ? Color.solidGreen : Color.solidGrey}
                  resizeMode="contain"
                  style={{width: 24, height: 24}}
                />
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={require('../../../assets/images/ic-tab-profile.png')}
                  tintColor={focused ? Color.solidGreen : Color.solidGrey}
                  resizeMode="contain"
                  style={{width: 24, height: 24}}
                />
              </View>
            );
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppBottomTabBar;

const styles = StyleSheet.create({});
