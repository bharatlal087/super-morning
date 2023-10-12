import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { screenMap } from "./screenMap";
import { EnterMobileScreen, RootScreen, VerifyOtpScreen, AppBottomTabBar } from "../screens";
import ProductDetailScreen from "../screens/ProductDetails/ProductDetailScreen";

function AppContainer(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={screenMap.Root}
          component={RootScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenMap.EnterMobile}
          component={EnterMobileScreen}
          options={{ headerShown: false, animation: "none", gestureEnabled: false }}
        />
        <Stack.Screen
          name={screenMap.VerifyOTP}
          component={VerifyOtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenMap.Home}
          component={AppBottomTabBar}
          options={{ headerShown: false, animation: "none", gestureEnabled: false }}
        />
        <Stack.Screen name={screenMap.ProductDetails}
        component={ProductDetailScreen}
        options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;