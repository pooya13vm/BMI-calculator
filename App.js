import React, { useState } from "react";
import { View, StatusBar, Text } from "react-native";
import { Icon, Overlay, Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TransitionPresets } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Result from "./screens/result";
import Imperal from "./screens/imperal";
import Metric from "./screens/meteric";
import { styles } from "./styles";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: "#F50" },
        pressColor: "orange",
        activeTintColor: "white",
        labelStyle: { fontSize: 16 },
        style: { backgroundColor: "#505050" },
      }}
    >
      <Tab.Screen
        name="Metric"
        component={Metric}
        options={{ title: "cm/kg" }}
      />
      <Tab.Screen
        name="Imperal"
        component={Imperal}
        options={{ title: "inch/pound" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const getFont = () => {
    return Font.loadAsync({
      BebasNeue: require("./assets/fonts/BebasNeue.ttf"),
    });
  };

  if (fontLoading) {
    return (
      <NavigationContainer>
        <StatusBar animated={true} StatusBarStyle={"dark-content"} />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            children={MyTabs}
            options={{
              title: "Body Mass Index (BMI)",
              headerTintColor: "#ECEFF1",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "BebasNeue",
                fontSize: 30,
              },
              headerStyle: { backgroundColor: "#212121" },
              headerRight: () => (
                <Icon
                  name="info"
                  type="AntDesign"
                  color="white"
                  size={28}
                  onPress={() => toggleOverlay()}
                />
              ),
              headerRightContainerStyle: {
                marginRight: 15,
              },
            }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
              title: "Result",
              headerStyle: { backgroundColor: "#212121" },
              headerTintColor: "#ECEFF1",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "BebasNeue",
                fontSize: 30,
              },
            }}
          />
        </Stack.Navigator>
        <View>
          <Overlay
            visible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{
              width: 300,
              height: 390,
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#546E7A",
            }}
          >
            <Text style={styles.overlayTxt}>
              Body Mass Index (BMI) is a person's weight divided by the square
              of height . A high BMI can be an indicator of high body fatness.
              BMI can be used to screen for weight categories that may lead to
              health problems but it is not diagnostic of the body fatness or
              health of an individual.
            </Text>
            <View style={{ height: 30 }}></View>
            <Button
              title="ok"
              titleStyle={{ fontSize: 18, fontWeight: "bold", color: "black" }}
              buttonStyle={{ backgroundColor: "white", width: 70 }}
              onPress={() => toggleOverlay()}
              style={styles.overlayBtn}
            />
          </Overlay>
        </View>
      </NavigationContainer>
    );
  } else
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => {
          setFontLoading(true);
        }}
        onError={console.warn}
      />
    );
}
